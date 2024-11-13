/* tslint:disable */
/* eslint-disable */
import { BidSummaryData } from './bid-summary-data';
export interface LotSummaryData {
  collatedBids?: Array<BidSummaryData>;

  /**
   * Lot id of bids
   */
  lotId?: number;

  /**
   * Total lot weight
   */
  lotTotalWeight?: number;
}
