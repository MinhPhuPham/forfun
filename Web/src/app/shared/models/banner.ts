export interface Banner {
  pageID: PageId;
  mainTitle: string;
  subTitle: string;
  backgroundImage: string;
}

export enum PageId {
  Home,
  Tenants,
  Pricing
}
