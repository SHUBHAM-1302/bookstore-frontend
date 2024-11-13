/* tslint:disable */
/* eslint-disable */
import { LotSummaryData } from './lot-summary-data';
export interface SalespadWeightSumData {
  lotSummaryData?: Array<LotSummaryData>;

  /**
   * Total lot weight
   */
  salespadTotalWeight?: number;
}
