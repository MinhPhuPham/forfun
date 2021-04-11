export interface Banner {
  pageID: PageId;
  mainTitle: string;
  subTitle: string;
  backgroundImage: string;
  path?: string;
  innerSingle?: boolean;
}

export enum PageId {
  Home,
  Tenants,
  TenantManagement,
  Pricing,
  AboutUs
}
