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
  .argument(
    '<endpoint>',
    'API endpoint to fetch data from (e.g., channel, leaderboards, livestream, etc.)'
  )
  .argument(
    '[username]',
    'The channel username to fetch data for, if applicable'
  )
  .option('-v1', 'Use API version 1')
  .option('-v2', 'Use API version 2 (default)')
  .option('-o, --output <type>', 'Output type: json, text', 'json')
  .option('-f, --file <path>', 'Save output to a file')
  .option('-c, --config <path>', 'Path to configuration file')
  .option('-p, --pretty', 'Pretty print the output', false)
  .option('-r, --region <region>', 'Region for featured livestreams', 'en')
  .helpOption('-h, --help', 'Display help for command');

async function main() {
  program.parse(process.argv);
  const options = program.opts();
  const [endpoint, username] = program.args;

  const version = options.v1 ? 'v1' : 'v2';
  const spinner = ora(
    chalk.yellow(`Fetching data from ${endpoint}...`)
  ).start();

  try {
    const kickApi = new KickApiWrapper({ puppeteer: { headless: 'new' } });
    let data;

    if (options.config) {
      const configFile = JSON.parse(fs.readFileSync(options.config, 'utf8'));
      options.fields = configFile.fields;
    }

    switch (endpoint) {
      case 'channel':
        data = await kickApi.fetchChannelData(
          username,
          version,
          options.fields
        );
        break;
      case 'leaderboards':
        data = await kickApi.fetchLeaderboards(username, options.fields);
        break;
      case 'livestream':
        data = await kickApi.fetchLiveStreamDetails(username, options.fields);
        break;
      case 'chatroom':
        data = await kickApi.fetchChatroomSettings(username, options.fields);
        break;
      case 'categories':
        data = await kickApi.fetchCategories(options.fields);
        break;
      case 'subcategories':
        data = await kickApi.fetchSubcategories(options.fields);
        break;
      case 'topcategories':
        data = await kickApi.fetchTopCategories(options.fields);
        break;
      case 'featured':
        data = await kickApi.fetchFeaturedLivestreams(
          options.region,
          options.fields
        );
        break;
      default:
        throw new Error('Invalid endpoint specified');
    }

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

    console.log(
      chalk.green.bold(`\nDone! Retrieved data for endpoint: ${endpoint}.`)
    );
  } catch (error) {
    spinner.fail(chalk.red('An error occurred: ' + error.message));
    process.exit(1);
  }
}

main();
