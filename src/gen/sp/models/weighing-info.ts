/* tslint:disable */
/* eslint-disable */
import { WeighingInfoStatus } from './weighing-info-status';
export interface WeighingInfo {

  /**
   * the time at which the weighingInfo is created
   */
  createdAt?: string;

  /**
   * weighing data
   */
  deviceid: string;

  /**
   * qunatity number being weighed
   */
  quantitySequence?: number;

  /**
   * weight of bag
   */
  quantityWeight: number;

  /**
   * generated for bid used for transcation management
   */
  spId: string;
  status: WeighingInfoStatus;

  /**
   * updated weight of bag
   */
  updatedQuantityWeight: number;

  /**
   * Generated on successful creation of weighing data
   */
  wghId?: number;

  /**
   * firstName of the writer.
   */
  wrFirstName?: string;

  /**
   * LastName of the writer.
   */
  wrLastName?: string;

  /**
   * UserName of the writer.
   */
  wrUserName?: string;

  /**
   * actor involved weighing data
   */
  writerId: string;
}
