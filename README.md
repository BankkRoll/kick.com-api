# kick.com-api

kick.com-api is a Node.js module offering an advanced interface for interacting with Kick's API using Puppeteer. It includes extensive customization options and supports various API endpoints.

For detailed documentation on advanced usage and customization options, visit https://kickcom-api.vercel.app/.

## Installation

```shell
npm install kick.com-api
```

## Key Features

- Comprehensive interface for multiple Kick.com API endpoints.
- Customizable Puppeteer options for browser automation.
- Selective field retrieval and different API version support.
- Detailed logging for efficient debugging and error handling.

## Basic Usage

First, import the `KickApiWrapper` and create an instance:

```javascript
import { KickApiWrapper } from 'kick.com-api';

const kickApi = new KickApiWrapper();
```

## Custom User Agent

First, import the `KickApiWrapper` and create an instance:

```javascript
const kickApi = new KickApiWrapper({
  userAgent: 'Your Custom User Agent'
});
kickApi.fetchChannelData('username')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching Channel Data With V1

```javascript
kickApi.fetchChannelData('username', 'v1', ['field1', 'field2'])
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching Leaderboards

```javascript
kickApi.fetchLeaderboards('username', ['field1', 'field2'])
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching Live Stream Details

```javascript
kickApi.fetchLiveStreamDetails('username', ['field1', 'field2'])
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching Chatroom Settings

```javascript
kickApi.fetchChatroomSettings('username', ['field1', 'field2'])
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching Categories

```javascript
kickApi.fetchCategories(['field1', 'field2'])
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching Subcategories

```javascript
kickApi.fetchSubcategories(['field1', 'field2'])
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching Top Categories

```javascript
kickApi.fetchTopCategories(['field1', 'field2'])
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Fetching Featured Livestreams

```javascript
kickApi.fetchFeaturedLivestreams('en', ['field1', 'field2'])
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### CLI Usage

### CLI Usage

The `kick-fetch` CLI tool provides a command-line interface for interacting with the Kick.com API. Use different commands for various endpoints:

- Fetch channel data: `kick-fetch channel <username> [options]`
- Fetch leaderboards: `kick-fetch leaderboards <username> [options]`
- Fetch live stream details: `kick-fetch livestream <username> [options]`
- Fetch chatroom settings: `kick-fetch chatroom <username> [options]`
- Fetch categories: `kick-fetch categories [options]`
- Fetch subcategories: `kick-fetch subcategories [options]`
- Fetch top categories: `kick-fetch topcategories [options]`
- Fetch featured livestreams: `kick-fetch featured [region] [options]`

For CLI usage and options, refer to the tool's help:

```shell
kick-fetch --help
```

For detailed documentation on advanced usage and customization options, visit our [online documentation](https://kickcom-api.vercel.app/).

## Support

If you need help or want to report an issue, please open an issue on the project's GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
