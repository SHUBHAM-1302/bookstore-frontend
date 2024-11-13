/* tslint:disable */
/* eslint-disable */

/**
 * Provides summary of Bid placed and weighed for lot
 */
export interface LotBidData {

  /**
   * number of lot quantity for which bid is placed
   */
  bidQuantity?: number;

  /**
   * Lot id of the Lot
   */
  lotId?: number;

  /**
   * maximum bid price placed for the lot
   */
  maxBidPrice?: number;

  /**
   * minimum bid price placed for the lot
   */
  minBidPrice?: number;

  /**
   * splitId for which split is done
   */
  splitId?: number;

  /**
   * number of lot quantity for which weighing is completed
   */
  weighed?: number;
  /**
   * number of lot quantity for which weighing is completed
   */
  totalWeight?: number;
  /**
   * number of lot quantity for which weighing is completed
   */
  updatedTotalWeight?: number;
}
