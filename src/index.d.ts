import { LaunchOptions } from 'puppeteer';

declare module 'kick.com-api' {
  interface KickApiWrapperOptions {
    apiVersion?: string;
    puppeteer?: LaunchOptions;
    userAgent?: string;
    gotoOptions?: any;
    browser?: any;
  }

  class KickApiWrapper {
    constructor(options?: KickApiWrapperOptions);

    fetchData<T = any>(url: string, fields?: string[] | null): Promise<T>;
    fetchChannelData(username: string, version?: string, fields?: string[] | null): Promise<any>;
    fetchLeaderboards(username: string, fields?: string[] | null): Promise<any>;
    fetchLiveStreamDetails(username: string, fields?: string[] | null): Promise<any>;
    fetchChatroomSettings(username: string, fields?: string[] | null): Promise<any>;
    fetchCategories(fields?: string[] | null): Promise<any>;
    fetchSubcategories(fields?: string[] | null): Promise<any>;
    fetchTopCategories(fields?: string[] | null): Promise<any>;
    fetchFeaturedLivestreams(region?: string, fields?: string[] | null): Promise<any>;
  }

  export { KickApiWrapper };
}
