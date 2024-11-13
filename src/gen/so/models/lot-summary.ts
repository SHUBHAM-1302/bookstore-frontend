/* tslint:disable */
/* eslint-disable */
export interface LotSummary {

  /**
   * id's of the lot
   */
  lots?: Array<number>;

  /**
   * package type like bag, cartons
   */
  packageName?: string;

  /**
   * package type id
   */
  packageType?: string;

  /**
   * number of packages of all the sellers
   */
  quantity?: number;
}
