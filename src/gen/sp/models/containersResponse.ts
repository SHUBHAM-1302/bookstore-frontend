/**
 * Salespad
 * This would cover the definition and documentation of the salespad service along with the REST end point, incoming request payload format and different responses for processing the commodity lots of the seller by the receving entities. Receving entities will facilitate buyer and seller to bid and sell the lot either by splitting or as is. REST end points would use the host and port defined by the admin and the end points would follow the usual standards and best practices as defined on the general REST API documentations. The http method type would define the underlying action.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: merco@kanilebettu.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { BidDetails } from "./bidDetails";

export interface ContainersResponse {
    /**
      * id of the bid container
      */
    bidContainerId?: number;
    /**
     * buyer id obtained from the access management
     */
    buyId?: string;
    /**
     * buyer first name obtained from the access management
     */
    readonly FirstName?: string;
    /**
     * buyer last name obtained from the access management
     */
    readonly LastName?: string;
    /**
     * buyer user name obtained from the access management
     */
    readonly UserName?: string;
    /**
     * identification of buyer for specific sale order
     */
    mark?: string;
    /**
     * total bid quantity from the buyer for the lot
     */
    totalBidQuantity?: number;
    /**
     * number of bids in container
     */
    totalBids?: number;
    lotids?: Array<number>;
    bidDetails?: Array<BidDetails>;
}