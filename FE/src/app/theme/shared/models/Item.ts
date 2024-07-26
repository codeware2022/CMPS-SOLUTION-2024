export interface IOurProduct {
  id: number;
  // brandName: string;
  // productCode: string;
  // productName: string;
  // category: string;
  // subcategory: string;
  // productMasterName: string;
  // genericName: string;
  // manufacturer: string;
  // dosageForm: string;
  // ingredient: string;
  // photos: string;

  brandName: string;
  productCode: string;
  productName: string;
  category: string;
  subcategory: string;
  //productMasterName: [null, Validators.required],
  genericName: string;
  manufacturer: string;
  dosageForm: string;
  composition: string;
  swot: string;
  distributor: string;
  packSize: string;
  IMS: string;
  flavor: string;
  color: string;
  ingredient: string;
  photos: string;
}

export interface IMarketDetail {
  productId: number;
  productName: string;
  brandName: string;
  updatedDate: string;
  enterDate: string;
  bonusFreeIssues: string;
  marketLeader: string;
  marketShare: string;
  avgSalesQty: string;
  wholeSalePrice: string;
  retailPrice: string;
  wholeSaleCustomerPrice: string;
  retailPricePatient: string;
  dateManufacture: string;
  dateExpire: string;
  batchNo: string;
  IMS: string;
  availability: string;
  photos: string;
  giveAways: string;
  tieUpSponsor: string;
  remarks: string;
}

export interface IBrand {
  id: number;
  name: string;
  category: number;
  subcategory: number;
  manufacturer: string;
  distributor: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  categoryId: number;
  subCategoryId: number;
  competitorProducts: ICompetitorProduct[];
}

export interface ICategory {
  id: number;
  name: string;
  icon: string;
  description: string;
  subcategories: ISubCategory[];
  products: IProduct[];
}

export interface ISubCategory {
  id: number;
  name: string;
  icon: string;
  description: string;
  categoryId: number;
  products: IProduct[];
}

export interface ICompetitorProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  sales: any;
  productId: number;
}
