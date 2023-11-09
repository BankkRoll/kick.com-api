#!/usr/bin/env node
const fs = require('fs');
const { KickApiWrapper } = require('./index');
const ora = require('ora');
const chalk = require('chalk');
const { program } = require('commander');

program
  .name('kick-fetch')
  .description('CLI to fetch data from kick.com API')
  .version('0.2.0');

program
  .argument('<username>', 'The channel username to fetch data for')
  .option('-v1', 'Use API version 1')
  .option('-v2', 'Use API version 2 (default)')
  .option('-o, --output <type>', 'Output type: json, text', 'json')
  .option('-f, --file <path>', 'Save output to a file')
  .option('-c, --config <path>', 'Path to configuration file')
  .option('-p, --pretty', 'Pretty print the output', false)
  .helpOption('-h, --help', 'Display help for command');

async function main() {
  program.parse(process.argv);
  const options = program.opts();
  const [username, ...fields] = program.args;

  if (!username) {
    console.error(chalk.red('Username is required.'));
    program.help();
    return;
  }

  const version = options.v1 ? 'v1' : 'v2';
  const spinner = ora(chalk.yellow('Fetching channel data...')).start();

  try {
    const kickApi = new KickApiWrapper(version);
    if (options.config) {
      const configFile = JSON.parse(fs.readFileSync(options.config, 'utf8'));
      fields.push(...configFile.fields);
    }

    const data = await kickApi.fetchChannelData(
      username,
      fields.length > 0 ? fields : null
    );
    spinner.succeed(chalk.green('Data fetched successfully!'));

    let output =
      options.output === 'json'
        ? options.pretty
          ? JSON.stringify(data, null, 2)
          : JSON.stringify(data)
        : Object.entries(data)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');

    if (options.file) {
      fs.writeFileSync(options.file, output);
      console.log(chalk.blue(`Output saved to ${options.file}`));
    } else {
      console.log(output);
    }

    console.log(chalk.green.bold(`\nDone! Retrieved data for ${username}.`));
  } catch (error) {
    spinner.fail(chalk.red('An error occurred: ' + error.message));
    process.exit(1);
  }
}

main();
