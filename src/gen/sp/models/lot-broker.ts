/* tslint:disable */

import { UpsertInfo } from "src/gen/so/models";

/* eslint-disable */
export interface LotBroker {

  /**
   * buyer first name obtained from the access management
   */
  FirstName?: string;

  /**
   * buyer Last name obtained from the access management
   */
  LastName?: string;

  /**
   * buyer user name obtained from the access management
   */
  UserName?: string;

  /**
   * broker id obtained from the access management
   */
  brokerId?: string;

  /**
   * Broker mark associated with
   */
  lotBrokerId?: number;

  /**
   * Lot id for which split is done
   */
  lotId?: number;

  /**
   * identification of broker for specific sale order
   */
  mark?: string;
  upsertInfo?: UpsertInfo;
}
