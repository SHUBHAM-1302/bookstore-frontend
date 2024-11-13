/* tslint:disable */
/* eslint-disable */
import { LotBidData } from './lot-bid-data';

/**
 * aggregation of the lot bid details
 */
export interface SalesPadSummary {

  /**
   * list of lots which are bidded and weighed
   */
  lotBidWeigheds?: Array<LotBidData>;
}
