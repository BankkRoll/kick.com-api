#!/usr/bin/env node
const { KickApiWrapper } = require('./index');

async function main() {
  const args = process.argv.slice(2);

  let username,
    fields = [],
    version = 'v2';

  function printHelp() {
    const cyan = '\x1b[36m';
    const green = '\x1b[32m';
    const yellow = '\x1b[33m';
    const reset = '\x1b[0m';

    console.log(`
      ${cyan}┌─────────────────────────────┐
      │     ${green}kick-fetch CLI${cyan}         │
      ${cyan}└─────────────────────────────┘
    
      ${cyan}┌─ ${yellow}Usage ${cyan}─────────────────────────┐
      │ ${green}kick-fetch [options]${cyan}         │
      │ <username> [...fields]       │
      ${cyan}└─────────────────────────────┘
      
      ${cyan}┌─ ${yellow}Options ${cyan}──────────────────────┐
      │ ${green}-v1${cyan}        Use API version 1       │
      │ ${green}-v2${cyan}        Use API version 2       │
      │            (default)            │
      │ ${green}-h, --help${cyan} Display help        │
      ${cyan}└─────────────────────────────┘
      
      ${cyan}┌─ ${yellow}Examples ${cyan}─────────────────────┐
      │ 1. Global install:           │
      │ ${green}$ npm install -g${cyan}             │
      │   ${green}kick.com-api${cyan}               │
      │ ${green}$ kick-fetch -v2${cyan}             │
      │   <username> [...fields]     │
      │                             │
      │ 2. Use with npx:             │
      │ ${green}$ npx kick.com-api -v1${cyan}       │
      │   <username> [...fields]     │
      ${cyan}└─────────────────────────────┘
    
      ${cyan}┌─ ${yellow}Tips ${cyan}───────────────────────┐
      │ ${green}* Replace <username>${cyan} with    │
      │   the actual username.       │
      │ ${green}* Specify fields for${cyan}         │
      │   specific data.             │
      │ ${green}* No fields retrieves all${cyan}    │
      │   available data.            │
      ${cyan}└─────────────────────────────┘${reset}
      `);
  }

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

  [username, ...fields] = args;

  if (!username) {
    console.error('Username is required.');
    printHelp();
    process.exit(1);
  }

  const kickApi = new KickApiWrapper(version);

  try {
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
