export interface IBookData {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published: string;
  publisher: string;
}

export interface IBookResponse {
  total: number;
  status: string;
  code: string;
  data: IBookData[];
}
