import { Browser, LaunchOptions, DirectNavigationOptions } from 'puppeteer';

declare module 'kick.com-api' {
  enum ApiVersion {
    V1 = 'v1',
    V2 = 'v2',
  }

  interface KickApiWrapperOptions {
    apiVersion?: ApiVersion;
    puppeteer?: LaunchOptions;
    userAgent?: string;
    gotoOptions?: DirectNavigationOptions;
    browser?: Browser;
  }

  class KickApiWrapper {
    constructor(options?: KickApiWrapperOptions);

    fetchData<T = any>(url: string, fields?: string[] | null): Promise<T>;
    fetchChannelData(
      username: string,
      version?: ApiVersion,
      fields?: string[] | null
    ): Promise<any>;
    fetchLeaderboards(
      username: string,
      fields?: string[] | null
    ): Promise<any>;
    fetchLiveStreamDetails(
      username: string,
      fields?: string[] | null
    ): Promise<any>;
    fetchChatroomSettings(
      username: string,
      fields?: string[] | null
    ): Promise<any>;
    fetchCategories(
      fields?: string[] | null
    ): Promise<any>;
    fetchSubcategories(
      fields?: string[] | null
    ): Promise<any>;
    fetchTopCategories(
      fields?: string[] | null
    ): Promise<any>;
    fetchFeaturedLivestreams(
      region?: string,
      fields?: string[] | null
    ): Promise<any>;
  }

  export { KickApiWrapper, ApiVersion };
}
