/* tslint:disable */
/* eslint-disable */

/**
 * A JSONPatch document as defined by RFC 6902
 */
export interface SaleOrderPatchDocument {

  /**
   * A string containing a JSON Pointer value.
   */
  from?: string;

  /**
   * The operation to be performed
   */
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';

  /**
   * A JSON-Pointer
   */
  path: string;

  /**
   * The value to be used within the operations.
   */
  value?: {
};
}
