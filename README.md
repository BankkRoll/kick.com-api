# kick.com-api

kick.com-api is a Node.js module that provides an easy-to-use interface for fetching channel data from Kick's API using Puppeteer. It simplifies the process of navigating to the channel's API endpoint and parsing the data for both v1 and v2 API endpoints.

## Installation

Install kick.com-api with npm:

```shell
npm install kick.com-api
```

## Usage

Here's an example of what the code inside your API route file might look like:

```javascript
// pages/api/channel.js
import { KickApiWrapper } from 'kick.com-api';

export default async function handler(req, res) {
  const kickApi = new KickApiWrapper(); // or use 'v1' if you want the version 1 of the API

  try {
    // Fetch all data for the channel 'adinross' using v2
    const data = await kickApi.fetchChannelData('adinross');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

### Module Usage

Create an instance of `KickApiWrapper` with an optional API version argument ('v1' or 'v2'). If no version is specified, 'v2' is used by default.

```javascript
import { KickApiWrapper } from 'kick.com-api';

// Initialize the API wrapper for v2 either way
// const kickApiV2 = new KickApiWrapper();
const kickApiV2 = new KickApiWrapper('v2');

// Fetch all data for the channel 'adinross' using v2
kickApiV2.fetchChannelData('adinross')
  .then(data => {
    console.log('Channel Data from v2:', data);
  })
  .catch(error => {
    console.error('Error occurred with v2:', error);
  });
```

```javascript
import { KickApiWrapper } from 'kick.com-api';

// Initialize the API wrapper for v1
const kickApiV1 = new KickApiWrapper('v1');

// Fetch all data for the channel 'adinross' using v1
kickApiV1.fetchChannelData('adinross')
  .then(data => {
    console.log('Channel Data from v1:', data);
  })
  .catch(error => {
    console.error('Error occurred with v1:', error);
  });
```

Retrieve specific fields by providing an array of field names as the second argument:

```javascript
import { KickApiWrapper } from 'kick.com-api';

// Initialize the API wrapper for v2 either way
// const kickApiV2 = new KickApiWrapper();
const kickApiV2 = new KickApiWrapper('v2');

// Fetch specific fields for the channel 'adinross' using v2
kickApiV2.fetchChannelData('adinross', ['id', 'followers_count', 'subscription_enabled'])
  .then(data => {
    console.log('Selected Channel Data from v2:', data);
  })
  .catch(error => {
    console.error('Error occurred with v2:', error);
  });
```

```javascript
import { KickApiWrapper } from 'kick.com-api';

// Initialize the API wrapper for v1
const kickApiV1 = new KickApiWrapper('v1');

// Fetch specific fields for the channel 'adinross' using v1
kickApiV1.fetchChannelData('adinross', ['id', 'followers_count', 'subscription_enabled'])
  .then(data => {
    console.log('Selected Channel Data from v1:', data);
  })
  .catch(error => {
    console.error('Error occurred with v1:', error);
  });
```

Check if a channel is live:

```javascript
import { KickApiWrapper } from 'kick.com-api';

// Initialize the API wrapper for v2 (by default)
const kickApi = new KickApiWrapper();

// Check if the channel 'adinross' is currently live using v2
kickApi.fetchChannelData('adinross', ['is_live'])
  .then(data => {
    const isLive = data.is_live;
    console.log(`Is the channel 'adinross' live? ${isLive ? 'Yes' : 'No'}`);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
```

### CLI Usage

The `kick-fetch` CLI tool is part of the kick.com-api package, which provides a command-line interface to fetch channel data from the kick.com API. It supports various options for flexible data retrieval.

#### Installation

Install globally with npm:

```shell
npm install -g kick.com-api
```

#### Basic Usage

Fetch all data for a specific channel with the default settings (API version 2):

```shell
kick-fetch <username>
```

#### Specifying API Version

Use the `-v1` or `-v2` flags to specify the API version. If no version is specified, `v2` is used by default:

```shell
kick-fetch -v1 <username>
kick-fetch -v2 <username>  # Same as default behavior
```

#### Fetching Specific Fields

To fetch specific fields, list them after the username:

```shell
kick-fetch <username> id followers_count subscription_enabled
```

#### Output Options

Control the output format with the `-o` or `--output` flag:

```shell
kick-fetch <username> -o json  # Outputs in JSON format
kick-fetch <username> -o text  # Outputs in plain text
```

#### Pretty Printing

Pretty print JSON output by using the `-p` or `--pretty` flag:

```shell
kick-fetch <username> -p  # Pretty prints the JSON output
```

#### Saving Output to a File

Use the `-f` or `--file` flag to save the output to a specified file:

```shell
kick-fetch <username> -f output.json
```

#### Configuration File

Specify a path to a configuration file with the `-c` or `--config` flag to use predefined settings:

```shell
kick-fetch -c path/to/kick.config.json <username>
```

### Configuration File Template (kick.config.json)

```json
{
  "username": "defaultChannel",
  "version": "v2",
  "outputType": "json",
  "prettyPrint": true,
  "fields": [
    "id",
    "followers_count",
    "subscription_enabled",
    "is_live"
  ],
  "file": "output.json"
}
```

The configuration file allows setting a default username, API version, output type, pretty printing option, specific fields to retrieve, and an output file.

#### NPX Methods

For those who prefer not to install the CLI tool globally or are using temporary environments, `npx` can be used to run the tool directly without a global installation:

```shell
npx kick.com-api kick-fetch <username>
```

#### Methods

##### fetchChannelData(username, [fields], [version])

Retrieves channel data for the specified `username`. Optionally pass an array of strings as the second argument to specify which fields to retrieve, and the API version as the third argument.

Parameters:
- `username` (String): The channel's username. This is a required parameter.
- `fields` (Array of Strings): An optional array specifying which fields to retrieve. If omitted, all data is retrieved.
- `version` (String): The API version ('v1' or 'v2'). If omitted, 'v2' is used by default.

Returns:
- A promise that resolves with the full channel data or a subset based on the specified fields.

### Advanced Usage

For advanced usage, including error handling and customization options, refer to the module's documentation. You can handle different API versions, set custom user agents, and implement more complex data processing as needed.

## Support

If you need help or want to report an issue, please open an issue on the project's GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
