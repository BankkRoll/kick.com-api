#!/usr/bin/env node
const { KickApiWrapper } = require('./index');

async function main() {
  const args = process.argv.slice(2);

  // Variables for username, fields, and API version
  let username,
    fields = [],
    version = 'v2';

  function printHelp() {
    console.log(`
Usage: kick-fetch [options] [username] [...fields]
Fetch channel data from kick.com API.

Options:
  -v1           Use API version 1.
  -v2           Use API version 2 (default).
  -h, --help    Show this help message and exit.

You can use the tool in two ways:

1. Install globally using npm:
   $ npm install -g kick.com-api
   $ kick-fetch -v2 [username] [...fields]

2. Use directly with npx (without installing):
   $ npx kick.com-api -v1 [username] [...fields]
`);
  }

  // Check if help is needed or if version is specified
  if (args.includes('-h') || args.includes('--help')) {
    printHelp();
    return;
  }
  if (args.includes('-v1')) {
    version = 'v1';
    args.splice(args.indexOf('-v1'), 1);
  }
  if (args.includes('-v2')) {
    version = 'v2';
    args.splice(args.indexOf('-v2'), 1);
  }

  // Remaining args should be username followed by fields
  [username, ...fields] = args;

  if (!username) {
    console.error('Username is required.');
    printHelp();
    process.exit(1);
  }

  // Initialize API wrapper with the specified version
  const kickApi = new KickApiWrapper(version);

  try {
    // Fetch the channel data
    const data = await kickApi.fetchChannelData(
      username,
      fields.length > 0 ? fields : null
    );
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('An error occurred:', error.message);
    process.exit(1);
  }
}

main();
