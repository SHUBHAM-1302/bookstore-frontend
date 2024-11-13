/**
 * Mercodesk Reports
 * This would cover the definition and documentation of the reports along with the REST end point, incoming request payload format and different responses for creating a reports. All the REST end points would use the host and port defined by the admin and the end points would follow the usual standards and best practices as defined on the general REST API documentations. The http method type  would define the underlying action.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: merco@kanilebettu.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ReceiptStatus } from './receiptStatus';
import { UserData } from './userData';

export interface Receipt { 
    /**
     * unique id for voucher at creation
     */
    readonly receiptId?: number;
    /**
     * prefix data taken from shopManager
     */
    prefix?: string;
    receiptNo?: number;
    categoryId?: number;
    /**
     * ReceiptCategoryName
     */
    receiptCategoryName?: string;
    /**
     * The Receipt generated Date And Time
     */
    readonly timeStamp?: string;
    referenceIds?: Array<string>;
    /**
     * total receipt refrence amount
     */
    referenceAmount?: number;
    /**
     * total Receipt paid amount
     */
    paidAmount?: number;
    /**
     * record the narration for transaction .
     */
    description?: string;
    /**
     * unique id for paymentMode at creation
     */
    paymentModeId?: number;
    /**
     * paymentMode obtained from the access managment
     */
    readonly paymentMode?: string;
    status?: ReceiptStatus;
    voucherIds?: Array<number>;
    transactorId?: UserData;
    /**
     * The receipt given alias name .
     */
    transactorAliasName?: string;
}