#!/usr/bin/env node
const { KickApiWrapper } = require("./index");
const kickApi = new KickApiWrapper();

const username = process.argv[2];

if (!username || username === "-h" || username === "--help") {
  console.log(`
Usage: kick-fetch [username]
Fetch channel data from kick.com API.

You can use the tool in two ways:

1. Install globally using npm:
   $ npm install -g kick.com-api
   $ kick-fetch [username]

2. Use directly with npx (without installing):
   $ npx kick.com-api [username]

Arguments:
  username    Username of the channel to fetch data for.

Options:
  -h, --help  Show this help message and exit.
`);
  process.exit(0);
}

kickApi
  .fetchChannelData(username)
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((error) => {
    console.error("An error occurred:", error);
    process.exit(1);
  });
