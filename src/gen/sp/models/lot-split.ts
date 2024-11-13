/* tslint:disable */
/* eslint-disable */
export interface LotSplit {

  /**
   * Lot id for which split is done
   */
  lotId: number;

  /**
   * identification of buyer
   */
  name: string;

  /**
   * Lot split id generated on successful insertion
   */
  splitId?: number;

  /**
   * split qunatity from the lot
   */
  splitquantity: number;
}
