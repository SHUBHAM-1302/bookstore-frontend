/**
 * SalesInvoice
 * This would cover the definition and documentation of the summary of sales and sales Invoice service along with the REST end points, Sales summary api provides detail of sales summary to the trader based on particular soid.In sales summary service trader can do modifications as per business requirements. Sales Invoice api is exclusively to provide total sales information to the seller.Sales Invoice provides data track of items, quantity, weight,rate and cost analysis per sale order. All the REST end points would use the host and port defined by the admin and the end points would follow the usual standards and best practices as defined on the general REST API documentations. The http method type would define the underlying action.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: merco@kanilebettu.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { UpsertInfo } from './upsertInfo';

export interface SalesInvoiceInput {
    /**
     * SaleInvoiceFormat from shop manager.
     */
    invoicePrefixFormat?: string;
    /**
     * SaleInvoice Amount
     */
    salesInvoiceAmount?: number;
    /**
     * updated Net Weight
     */
    updatedNetWeight?: number;
    /**
     * accepted updated Net Weight
     */
    acceptedWeightUpdate?: boolean;
    /**
     * SaleInvoiceNo from shop manager
     */
    sIRunningNo?: number;
    /**
     * check for resetting invoice number
     */
    isContinuousSINo?: boolean;
    upsertInfo?: UpsertInfo;
}