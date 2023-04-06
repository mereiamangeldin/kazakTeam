export interface Category{
  ID: number,
  Name: string
}

export interface Product{
  ID: number;
  Name: string;
  Description: string;
  CategoryID: number;
}
