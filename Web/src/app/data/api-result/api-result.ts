export interface IApiResult<T> {
  success: boolean;
  message: string;
  code?: string;
  data: T;
}

export interface IPaginatedApiResult<T> {
  success: boolean;
  message: string;
  code?: string;
  data: T[];
  links?: LinksPaginator;
}

export interface LinksPaginator {
  nextPage?: string;
  prevPage?: string;
  pageIndex?: number;
  pageSize?: number;
  totalItems?: number;
  totalPages?: number;
}

export class ApiResult<T> implements IApiResult<T> {
  success: boolean;
  message: string;
  data: T;
}
