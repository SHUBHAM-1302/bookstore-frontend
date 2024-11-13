/**
 * BackendForMobile
 * The Backend-for-Mobile is a comprehensive solution designed to facilitate data validation and ensure data integrity within an Android application. This service serves as the interface between the backend server and the frontend Android application, providing a seamless flow of data validation and communication as per requirements. 
 *
 * OpenAPI spec version: 0.0.1
 * Contact: merco@kanilebettu.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface BidValidationRequest { 
    /**
     * Different states of Salepad Bid.
     */
    bidStatus: BidValidationRequest.BidStatusEnum;
    currentBidQuantity?: number;
    lotId: number;
    newBidQuantity: number;
    soId: string;
    splitId?: number;
}
export namespace BidValidationRequest {
    export type BidStatusEnum = 'NORMAL' | 'CROSS-OVER' | 'SELF';
    export const BidStatusEnum = {
        NORMAL: 'NORMAL' as BidStatusEnum,
        CROSSOVER: 'CROSS-OVER' as BidStatusEnum,
        SELF: 'SELF' as BidStatusEnum
    };
}