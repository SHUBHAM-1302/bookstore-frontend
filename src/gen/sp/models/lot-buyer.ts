/* tslint:disable */

import { UpsertInfo } from "src/gen/so/models";

/* eslint-disable */
export interface LotBuyer {

  /**
   * buyer first name obtained from the access management
   */
  FirstName?: string;

  /**
   * buyer last name obtained from the access management
   */
  LastName?: string;

  /**
   * buyer user name obtained from the access management
   */
  UserName?: string;

  /**
   * buyer id obtained from the access management
   */
  buyId: string;

  /**
   * Buyer mark associated with
   */
  lotBuyId?: number;

  /**
   * Lot id for which split is done
   */
  lotId?: number;

  /**
   * identification of buyer for specific sale order
   */
  mark: string;

  /**
   * split id of the lot
   */
  splitId?: number;

  /**
   * to classify the buyer registered or non registered
   */
  temporary?: boolean;
  upsertInfo?: UpsertInfo;
}
