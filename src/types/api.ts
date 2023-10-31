export type ApiResponseList<Data> = ApiReponse<Data[]>

export type ApiReponse<Data> = {
  data: Data;
  pagination: ApiPagination;
};

export type ApiPagination = {
  total: number;
  skipped: number;
  limited: number;
  page: number;
}
