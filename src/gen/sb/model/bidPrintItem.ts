/**
 * Salesbill
 * This would cover the definition and documentation of the Mercodesk sales bills for the commidities completed the bids and weighing. Operation involves creation on sales bill for the salespad items, commission, brokerage and pending bill details Salesbill is mainly targets the buyer and broker and provide the draft bill to be settled with merchants. REST end points would use the host and port defined by the admin and the end points would follow the usual standards and best practices as defined on the general REST API documentations. The http method type would define the underlying action.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: merco@kanilebettu.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface BidPrintItem { 
    itemName?: string;
    itemCount?: number;
    itemTotalWeight?: number;
    ratePer?: number;
    itemRate?: number;
    itemTotalAmount?: number;
    itemMeasurement?: string;
}