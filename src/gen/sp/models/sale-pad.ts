/* tslint:disable */
/* eslint-disable */
import { LotSplit } from './lot-split';
import { SalePadStatus } from './sale-pad-status';
import { SalesPadSummary } from './sales-pad-summary';
export interface SalePad {

  /**
   * list of lot split
   */
  lotsplits?: Array<LotSplit>;

  /**
   * uuid of organization
   */
  receiverId?: string;

  /**
   * first name of organization
   */
  receiverLastName?: string;

  /**
   * first name of organization
   */
  receiverUserName?: string;

  /**
   * first name of organization
   */
  receiverfirstName?: string;
  salepadStatus?: SalePadStatus;
  salespadsummary?: SalesPadSummary;

  /**
   * Sale Order id
   */
  soId?: string;

  /**
   * Sale pad id
   */
  spadId?: string;
}
