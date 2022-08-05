export interface IMerchandise extends InsideMerchandise {
  merchandises: InsideMerchandise;
}

export interface InsideMerchandise {
  description: string;
  price: number;
  store: JSON;
}
