# kick.com-api

kick.com-api is a Node.js module that provides an easy-to-use interface for fetching channel data from Kick's API using Puppeteer. It abstracts away the complexities of setting up Puppeteer and handling navigation, so you can focus on retrieving and using the data.

## Features

- Simple and concise API
- Automatic handling of Puppeteer browser instance
- Error handling and logging

## Installation

To install kick.com-api, run the following command in your project directory:

```shell
npm install kick.com-api
```

## Usage

Here's a quick example to get you started:

```javascript
import { kick.com-api } from 'kick.com-api';

const kickApi = new kick.com-api();

kickApi.fetchChannelData('adinross')
  .then(data => {
    console.log('Channel Data:', data);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
```

### CLI Usage

The `kick.com-api` can also be used directly via the command line.

#### Global Installation and Usage

For global usage, which allows you to use `kick.com-api` from any terminal path, install the package globally using npm:

```shell
npm install -g kick.com-api
```

After installation, you can fetch channel data directly via CLI for any user by executing:

```shell
kick-fetch adinross
```

If you want to run the package without installing it, you can use `npx`:

```shell
npx kick-fetch adinross
```

### Methods

#### fetchChannelData(username)

Fetches data for a specific channel.

Parameters:
- `username` - The username of the channel.

Returns a promise that resolves with the channel data.

## Response

<details>

```json
{
    "id": 875396,
    "user_id": 904404,
    "slug": "adinross",
    "is_banned": false,
    "playback_url": "https://fa723fc1b171.us-west-2.playback.live-video.net/api/video/v1/us-west-2.196233775518.channel.ABo1nG5GypZM.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzM4NCJ9.eyJhd3M6Y2hhbm5lbC1hcm4iOiJhcm46YXdzOml2czp1cy13ZXN0LTI6MTk2MjMzNzc1NTE4OmNoYW5uZWwvQUJvMW5HNUd5cFpNIiwiYXdzOmFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbiI6Imh0dHBzOi8va2ljay5jb20saHR0cHM6Ly9wbGF5ZXIua2ljay5jb20saHR0cHM6Ly9hZG1pbi5raWNrLmNvbSxodHRwczovL3d3dy5nc3RhdGljLmNvbSIsImF3czpzdHJpY3Qtb3JpZ2luLWVuZm9yY2VtZW50IjpmYWxzZSwiZXhwIjoxNjk5NDk5MTg0fQ.zWGZU9ki7xLi0d4EZ8Bho76lmv6MpBJb7x7yK1CFn4x0ttRa4zY0XVPAkPCyZRYpS0z00OunK-CGs8Y-LAw3MPqZoejAjNVK2V_4x-0u7IdtLn0nJKVpjV30N9NjwM8e",
    "vod_enabled": true,
    "subscription_enabled": true,
    "followers_count": 788562,
    "following": true,
    "subscription": null,
    "subscriber_badges": [
        {
            "id": 1142,
            "channel_id": 875396,
            "months": 1,
            "badge_image": {
                "srcset": "",
                "src": "https://files.kick.com/channel_subscriber_badges/1142/original"
            }
        },
        {
            "id": 1143,
            "channel_id": 875396,
            "months": 2,
            "badge_image": {
                "srcset": "",
                "src": "https://files.kick.com/channel_subscriber_badges/1143/original"
            }
        },
        {
            "id": 1144,
            "channel_id": 875396,
            "months": 3,
            "badge_image": {
                "srcset": "",
                "src": "https://files.kick.com/channel_subscriber_badges/1144/original"
            }
        },
        {
            "id": 1145,
            "channel_id": 875396,
            "months": 6,
            "badge_image": {
                "srcset": "",
                "src": "https://files.kick.com/channel_subscriber_badges/1145/original"
            }
        },
        {
            "id": 1146,
            "channel_id": 875396,
            "months": 9,
            "badge_image": {
                "srcset": "",
                "src": "https://files.kick.com/channel_subscriber_badges/1146/original"
            }
        },
        {
            "id": 1147,
            "channel_id": 875396,
            "months": 12,
            "badge_image": {
                "srcset": "",
                "src": "https://files.kick.com/channel_subscriber_badges/1147/original"
            }
        }
    ],
    "banner_image": {
        "url": "https://files.kick.com/images/channel/875396/banner_image/67e9bac5-ad43-4b43-a7a4-2fb26c75c71d"
    },
    "livestream": null,
    "role": null,
    "muted": false,
    "follower_badges": [],
    "offline_banner_image": {
        "src": "https://files.kick.com/images/channel/875396/offline_banner/conversion/4ee84429-2ced-4a9e-859d-96cc1a1db603-fullsize.jpg", 
        "srcset": "https://files.kick.com/images/channel/875396/offline_banner/responsives/4ee84429-2ced-4a9e-859d-96cc1a1db603___fullsize_1200_675.webp 1200w, https://files.kick.com/images/channel/875396/offline_banner/responsives/4ee84429-2ced-4a9e-859d-96cc1a1db603___fullsize_1003_564.webp 1003w, https://files.kick.com/images/channel/875396/offline_banner/responsives/4ee84429-2ced-4a9e-859d-96cc1a1db603___fullsize_840_473.webp 840w, https://files.kick.com/images/channel/875396/offline_banner/responsives/4ee84429-2ced-4a9e-859d-96cc1a1db603___fullsize_702_395.webp 702w, https://files.kick.com/images/channel/875396/offline_banner/responsives/4ee84429-2ced-4a9e-859d-96cc1a1db603___fullsize_588_331.webp 588w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTIwMCA2NzUiPgoJPGltYWdlIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjY3NSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEEvUEd4cy90RW9yNkorRGZ3a3RmRjFpWHVaVlRIVEpyd1hTU0ZYTmQxNGQrSkdwZUhZREZhdXlBOGNHb3hDNXFhUzNQb3N0VVlUYzVucUh4SCtFR2srR2JaeTA2dHh4ZzE4M2FuWXhRM3NpcTN5QThWM2V0ZkVDLzF5SjF1NW1mL0FIalhuV28zZm1UbkJyS2hHY1Y3enVMSHFFcWpuRFM1ZTBuclc1Z2JSeFJSV2t2aU9XSHdvbzZsd3JZNDRya3BUKzlORkZkTkw0VG54SHhILzlrPSI+Cgk8L2ltYWdlPgo8L3N2Zz4= 32w"
    },
    "verified": true,
    "recent_categories": [
        {
            "id": 28,
            "category_id": 4,
            "name": "Slots & Casino",
            "slug": "slots",
            "tags": [
                "Gambling"
            ],
            "description": null,
            "deleted_at": null,
            "viewers": 21518,
            "banner": {
                "responsive": "https://files.kick.com/images/subcategories/28/banner/responsives/5d5a7c84-0791-4e4c-9e9e-2ff031c88f8f___banner_600_800.webp 600w, https://files.kick.com/images/subcategories/28/banner/responsives/5d5a7c84-0791-4e4c-9e9e-2ff031c88f8f___banner_501_668.webp 501w, https://files.kick.com/images/subcategories/28/banner/responsives/5d5a7c84-0791-4e4c-9e9e-2ff031c88f8f___banner_420_560.webp 420w, https://files.kick.com/images/subcategories/28/banner/responsives/5d5a7c84-0791-4e4c-9e9e-2ff031c88f8f___banner_351_468.webp 351w, https://files.kick.com/images/subcategories/28/banner/responsives/5d5a7c84-0791-4e4c-9e9e-2ff031c88f8f___banner_294_392.webp 294w, https://files.kick.com/images/subcategories/28/banner/responsives/5d5a7c84-0791-4e4c-9e9e-2ff031c88f8f___banner_245_327.webp 245w, https://files.kick.com/images/subcategories/28/banner/responsives/5d5a7c84-0791-4e4c-9e9e-2ff031c88f8f___banner_205_273.webp 205w, https://files.kick.com/images/subcategories/28/banner/responsives/5d5a7c84-0791-4e4c-9e9e-2ff031c88f8f___banner_172_229.webp 172w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgNjAwIDgwMCI+Cgk8aW1hZ2Ugd2lkdGg9IjYwMCIgaGVpZ2h0PSI4MDAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQTdRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyT0RBcExDQnhkV0ZzYVhSNUlEMGdPVEFLLzlzQVF3QURBZ0lEQWdJREF3TURCQU1EQkFVSUJRVUVCQVVLQndjR0NBd0tEQXdMQ2dzTERRNFNFQTBPRVE0TEN4QVdFQkVURkJVVkZRd1BGeGdXRkJnU0ZCVVUvOXNBUXdFREJBUUZCQVVKQlFVSkZBMExEUlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVS84QUFFUWdBS3dBZ0F3RWlBQUlSQVFNUkFmL0VBQjhBQUFFRkFRRUJBUUVCQUFBQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVFBQUlCQXdNQ0JBTUZCUVFFQUFBQmZRRUNBd0FFRVFVU0lURkJCaE5SWVFjaWNSUXlnWkdoQ0NOQ3NjRVZVdEh3SkROaWNvSUpDaFlYR0JrYUpTWW5LQ2txTkRVMk56ZzVPa05FUlVaSFNFbEtVMVJWVmxkWVdWcGpaR1ZtWjJocGFuTjBkWFozZUhsNmc0U0Zob2VJaVlxU2s1U1ZscGVZbVpxaW82U2xwcWVvcWFxeXM3UzF0cmU0dWJyQ3c4VEZ4c2ZJeWNyUzA5VFYxdGZZMmRyaDR1UGs1ZWJuNk9ucThmTHo5UFgyOS9qNSt2L0VBQjhCQUFNQkFRRUJBUUVCQVFFQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVJBQUlCQWdRRUF3UUhCUVFFQUFFQ2R3QUJBZ01SQkFVaE1RWVNRVkVIWVhFVElqS0JDQlJDa2FHeHdRa2pNMUx3RldKeTBRb1dKRFRoSmZFWEdCa2FKaWNvS1NvMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvS0RoSVdHaDRpSmlwS1RsSldXbDVpWm1xS2pwS1dtcDZpcHFyS3p0TFcydDdpNXVzTER4TVhHeDhqSnl0TFQxTlhXMTlqWjJ1TGo1T1htNStqcDZ2THo5UFgyOS9qNSt2L2FBQXdEQVFBQ0VRTVJBRDhBNVhSZmcxZkd6M2JTVDdDcUduZkQvVVg4UUd5Wml2UFExN2Y0VThXeUhTaHRqREVEdUt3TG05TCtMSXJvWWpkajByeS9yTDBsZlZuMVZDaGlPV2FxL0QzT0c4Ui9DYS8wMmFCOStBU0s2alVmQzBtaytGbFNmREJsNjEyM2pDVnB0TlNTVjhrWU5ZM2lCbnUvQzR5U1J0NHJHclhsaXBScDR0M2ltZE5DOUtIdE1QZm1TKzhqOEQzbW5XZGlWdVpBQ08yYTUzeDc0czB1dzFlM250NUYyb2VRRFhDNmpwK3VHNyt5Mk82UnNjNHJEbCtHZmlEVkxwelA1bkhVR3FvMFAzYWJlaDZGSER4K3N5ZFdYdTlqMUh4VDhaZE12dERXR0lBeVk3VjV2cmZ4MmUyMG43THR5RjRCcHVuL0FBdnY3V0p6UEV6QUhBTmVmZkVEd2JlNmJkR09hUHkwYmtaRmE0WENxcFVsRGxQbzhSUXdlSHdFS25OZlh2cWZTUGc3VTFzTmJXZWNncXc1SnIwcE5YME9WV1pwa1YyNjRyeGM4QmFpZVJnVGhpUHhyc3BlN0ZJckU1ZlNyUzV0bWU2d1h2aHVTM2FFVHFYNjgxNHg4WU5IdGRkMUpUSGg0MEdCaXFsbEl3blg1aitkYkY2Z2FJRWpKOTY3NkZaVW5kTFV4cDVUVHFRZk83MlAvOWs9Ij4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w",
                "url": "https://files.kick.com/images/subcategories/28/banner/5d5a7c84-0791-4e4c-9e9e-2ff031c88f8f"
            },
            "category": {
                "id": 4,
                "name": "Gambling",
                "slug": "gambling",
                "icon": "🎰"
            }
        },
        {
            "id": 15,
            "category_id": 2,
            "name": "Just Chatting",
            "slug": "just-chatting",
            "tags": [
                "IRL"
            ],
            "description": null,
            "deleted_at": null,
            "viewers": 68475,
            "banner": {
                "responsive": "https://files.kick.com/images/subcategories/15/banner/responsives/8f43401b-0d59-4802-8f70-cd5e259adc9b___banner_600_800.webp 600w, https://files.kick.com/images/subcategories/15/banner/responsives/8f43401b-0d59-4802-8f70-cd5e259adc9b___banner_501_668.webp 501w, https://files.kick.com/images/subcategories/15/banner/responsives/8f43401b-0d59-4802-8f70-cd5e259adc9b___banner_420_560.webp 420w, https://files.kick.com/images/subcategories/15/banner/responsives/8f43401b-0d59-4802-8f70-cd5e259adc9b___banner_351_468.webp 351w, https://files.kick.com/images/subcategories/15/banner/responsives/8f43401b-0d59-4802-8f70-cd5e259adc9b___banner_293_391.webp 293w, https://files.kick.com/images/subcategories/15/banner/responsives/8f43401b-0d59-4802-8f70-cd5e259adc9b___banner_245_327.webp 245w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgNjAwIDgwMCI+Cgk8aW1hZ2Ugd2lkdGg9IjYwMCIgaGVpZ2h0PSI4MDAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQTdRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyT0RBcExDQnhkV0ZzYVhSNUlEMGdPVEFLLzlzQVF3QURBZ0lEQWdJREF3TURCQU1EQkFVSUJRVUVCQVVLQndjR0NBd0tEQXdMQ2dzTERRNFNFQTBPRVE0TEN4QVdFQkVURkJVVkZRd1BGeGdXRkJnU0ZCVVUvOXNBUXdFREJBUUZCQVVKQlFVSkZBMExEUlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVS84QUFFUWdBS3dBZ0F3RWlBQUlSQVFNUkFmL0VBQjhBQUFFRkFRRUJBUUVCQUFBQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVFBQUlCQXdNQ0JBTUZCUVFFQUFBQmZRRUNBd0FFRVFVU0lURkJCaE5SWVFjaWNSUXlnWkdoQ0NOQ3NjRVZVdEh3SkROaWNvSUpDaFlYR0JrYUpTWW5LQ2txTkRVMk56ZzVPa05FUlVaSFNFbEtVMVJWVmxkWVdWcGpaR1ZtWjJocGFuTjBkWFozZUhsNmc0U0Zob2VJaVlxU2s1U1ZscGVZbVpxaW82U2xwcWVvcWFxeXM3UzF0cmU0dWJyQ3c4VEZ4c2ZJeWNyUzA5VFYxdGZZMmRyaDR1UGs1ZWJuNk9ucThmTHo5UFgyOS9qNSt2L0VBQjhCQUFNQkFRRUJBUUVCQVFFQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVJBQUlCQWdRRUF3UUhCUVFFQUFFQ2R3QUJBZ01SQkFVaE1RWVNRVkVIWVhFVElqS0JDQlJDa2FHeHdRa2pNMUx3RldKeTBRb1dKRFRoSmZFWEdCa2FKaWNvS1NvMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvS0RoSVdHaDRpSmlwS1RsSldXbDVpWm1xS2pwS1dtcDZpcHFyS3p0TFcydDdpNXVzTER4TVhHeDhqSnl0TFQxTlhXMTlqWjJ1TGo1T1htNStqcDZ2THo5UFgyOS9qNSt2L2FBQXdEQVFBQ0VRTVJBRDhBdGZGNVJlZUg1WEErWWpqTmZPM2duVmg0VDE4STBnekszTmV2ZkZqeHdvZ2UyNEFJcjVjbTFPWC9BSVNoWmQyVTNldFoxNlBKTDJhWjE0Vit6WE16Mi80aytOSUZhM2dnYmZKS1FUaXZiUGhXelM2TmF5Tndkb3I0N3Zid2FoNGl0OE1YQzRyNmkrRW11VEpiUndOekdCeFhER2krYmtXNTIxNSswWE1mTTN4eDF6VVgxdnk0M2FPUEhXdk0vRHR4TkxyQ3BLNWZKcjNMNDErR3BMejk1QW1XUEhBclArRnY3UEdzNnJISHFiUU1VemtjVjlIaUkya3p5WXB0bUhwbW5ycG1waWFjWkRkSytnL2gzcU1jY0VZUTRKRllPdWZCUFZtbGpab2ZMamo2bkZQczNUdzVjcEZuN2d3Y1Y1dENsSjFuTG9qMDVTU3AyUFl6NEc4TzZ4QWpYY28zZWhyMEhSYm5SdkMraHJhMmpvUW80RmVRNzJEamsxZWpkaUFOeHI2aVdHVXRXeUZoMGVwTHFtbWVJSVdpdUdXTU1NWkZjZHJYd3Q4T3RISk1rb2VRblBXc0JaWFJ2bFlqNkdwbnVaVEhneU1meHFJNFZMWmx1aXI3bi8vWiI+Cgk8L2ltYWdlPgo8L3N2Zz4= 32w",
                "url": "https://files.kick.com/images/subcategories/15/banner/8f43401b-0d59-4802-8f70-cd5e259adc9b"
            },
            "category": {
                "id": 2,
                "name": "IRL",
                "slug": "irl",
                "icon": "🎙️"
            }
        }
    ],
    "can_host": true,
    "user": {
        "id": 904404,
        "username": "AdinRoss",
        "agreed_to_terms": true,
        "email_verified_at": "2023-02-12T17:55:33.000000Z",
        "bio": "Sup, Kid named Adin just tryna make it one day",
        "country": null,
        "state": null,
        "city": null,
        "instagram": "",
        "twitter": "",
        "youtube": "",
        "discord": "",
        "tiktok": "",
        "facebook": "",
        "profile_pic": "https://files.kick.com/images/user/904404/profile_image/conversion/45a66a3c-8459-4ac8-908b-ab43bb69bef2-fullsize.webp"
    },
    "chatroom": {
        "id": 875062,
        "chatable_type": "AppModelsChannel",
        "channel_id": 875396,
        "created_at": "2023-02-12T17:54:49.000000Z",
        "updated_at": "2023-11-07T04:34:27.000000Z",
        "chat_mode_old": "public",
        "chat_mode": "public",
        "slow_mode": true,
        "chatable_id": 875396,
        "followers_mode": true,
        "subscribers_mode": false,
        "emotes_mode": false,
        "message_interval": 5,
        "following_min_duration": 60
    }
}
```

</details>

## Logging

The module provides a simple logger with the following methods:

- `success(message)`: Logs a success message in green.
- `info(message)`: Logs an informational message in blue.
- `warn(message)`: Logs a warning message in yellow.
- `error(message)`: Logs an error message in red.

## Support

If you encounter any issues or have any questions about using kick.com-api, please file an issue on the GitHub repository issue tracker.

