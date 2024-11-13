/* tslint:disable */
/* eslint-disable */
import { BidStatus } from './bid-status';

/**
 * Provides summary of Bid placed and weighed for lot
 */
export interface BidSummaryData {

  /**
   * number of lot quantity for which bid is placed
   */
  bidQuantity?: number;

  /**
   * maximum bid price placed for the lot
   */
  rate?: number;
  spIds?: Array<string>;

  /**
   * number of lot quantity for which weighing is completed
   */
  totalWeight?: number;
  weighingStatus?: BidStatus;
}
