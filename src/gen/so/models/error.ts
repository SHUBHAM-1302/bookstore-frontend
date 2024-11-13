/* tslint:disable */
/* eslint-disable */

/**
 * Error Payload
 */
export interface Error {

  /**
   * The possible soution to the error
   */
  advice?: string;

  /**
   * Error Code
   */
  code?: number;

  /**
   * Error Message
   */
  message?: string;

  /**
   * The root cause
   */
  rootCause?: string;
}