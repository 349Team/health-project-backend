import { PaginationResult } from '../interfaces/pagination.interface';

export class MetaDto {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export class PaginationResponseDto<D, T = any> {
  meta: MetaDto;
  data: T[] | D[];

  constructor(
    paginationResult: PaginationResult<D>,
    DtoClass?: { new (data: D): T },
  ) {
    this.meta = paginationResult.meta;
    this.data = DtoClass
      ? paginationResult.data.map((item) => new DtoClass(item))
      : paginationResult.data;
  }
}
