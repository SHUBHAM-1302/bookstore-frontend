/* tslint:disable */
/* eslint-disable */
export interface BidStatus {
  /**

* Different states of BidStatus.
*/
  status?: BidStatus.StatusEnum;
}
export namespace BidStatus {
  export type StatusEnum = 'OPEN' | 'INPROGRESS' | 'POSTWEIGHING' | 'COMPLETED' | 'LISTED';
  export const StatusEnum = {
    OPEN: 'OPEN' as StatusEnum,
    INPROGRESS: 'INPROGRESS' as StatusEnum,
    POSTWEIGHING: 'POSTWEIGHING' as StatusEnum,
    COMPLETED: 'COMPLETED' as StatusEnum,
    LISTED: 'LISTED' as StatusEnum,
  };
}
