# kick.com-api

kick.com-api is a Node.js module that provides an easy-to-use interface for fetching channel data from Kick's API using Puppeteer. It simplifies the process of navigating to the channel's API endpoint and parsing the data for both v1 and v2 API endpoints.

## Installation

Install kick.com-api with npm:

```shell
npm install kick.com-api
```

## Usage

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

The package includes a CLI tool for fetching channel data. You can specify the API version with `-v1` or `-v2` flags. If no version is specified, `v2` is used by default.

```shell
# Install globally with npm
npm install -g kick.com-api

# Use the CLI tool without specifying a version (defaults to v2)
kick-fetch adinross

# Use the CLI tool with v1
kick-fetch -v1 adinross

# Use the CLI tool with v2 explicitly
kick-fetch -v2 adinross

# Fetch specific fields without specifying a version (defaults to v2)
kick-fetch adinross id followers_count subscription_enabled

# Fetch specific fields with v1
kick-fetch -v1 adinross id followers_count subscription_enabled

# Fetch specific fields with v2 explicitly
kick-fetch -v2 adinross id followers_count subscription_enabled
```

## NPX Methods

For those who prefer not to install the CLI tool globally or are using temporary environments, `npx` can be used to run the tool directly without a global installation.

```shell
# Use the npx command without specifying a version (defaults to v2)
npx kick.com-api kick-fetch adinross

# Use the npx command with v1
npx kick.com-api kick-fetch -v1 adinross

# Use the npx command with v2 explicitly
npx kick.com-api kick-fetch -v2 adinross

# Fetch specific fields using npx without specifying a version (defaults to v2)
npx kick.com-api kick-fetch adinross id followers_count subscription_enabled

# Fetch specific fields using npx with v1
npx kick.com-api kick-fetch -v1 adinross id followers_count subscription_enabled

# Fetch specific fields using npx with v2 explicitly
npx kick.com-api kick-fetch -v2 adinross id followers_count subscription_enabled
```

### Methods

#### fetchChannelData(username, [fields], [version])

Retrieves channel data for the specified `username`. Optionally pass an array of strings as the second argument to specify which fields to retrieve, and the API version as the third argument.

Parameters:
- `username` (String): The channel's username. This is a required parameter.
- `fields` (Array of Strings): An optional array specifying which fields to retrieve. If omitted, all data is retrieved.
- `version` (String): The API version ('v1' or 'v2'). If omitted, 'v2' is used by default.

Returns:
- A promise that resolves with the full channel data or a subset based on the specified fields.

## Advanced Usage

For advanced usage, including error handling and customization options, refer to the module's documentation. You can handle different API versions, set custom user agents, and implement more complex data processing as needed.

## Support

If you need help or want to report an issue, please open an issue on the project's GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
