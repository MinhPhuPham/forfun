export interface Banner {
  pageID: PageId;
  mainTitle: string;
  subTitle: string;
  backgroundImage: string;
  path?: string;
  inner?: string;
}

export enum PageId {
  Home,
  Tenants,
  TenantManagement
}
