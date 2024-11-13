/* tslint:disable */
/* eslint-disable */
export interface WriterDaySheetItem {

  /**
   * sequence in which the spId are scanned and stored
   */
  position?: number;

  /**
   * unique id of the sale order
   */
  soid: string;

  /**
   * generated for bid used for transcation management
   */
  spId: string;

  /**
   * firstName of the writer.
   */
  wrFirstName?: string;

  /**
   * unique id of the writer.
   */
  wrId?: string;

  /**
   * LastName of the writer.
   */
  wrLastName?: string;

  /**
   * UserName of the writer.
   */
  wrUserName?: string;
}
