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
import { AliasBuyer } from './aliasBuyer';
import { BidMode } from './bidMode';
import { BidStatus } from './bidStatus';
import { LotBroker } from './lotBroker';
import { LotBuyer } from './lotBuyer';
import { Lots } from './lots';
import { UpsertInfo } from './upsertInfo';

export interface BidDetails {
    Lots?: Lots;
    /**
     * generated for bid used for transcation management
     */
    spId?: string;
    /**
     * generated for bid used for transcation management
     */
    soId?: string;
    /**
     * spadId for associate bid .
     */
    spadId?: string;
    /**
     * bid qunatity from the buyer for the lot
     */
    bidquantity?: number;
    /**
     * bid amount from the buyer for the lot
     */
    bidPrice?: number;
    upsertInfo?: UpsertInfo;
    lotBuyer?: LotBuyer;
    aliasbuyer?: AliasBuyer;
    lotBroker?: LotBroker;
    status?: BidStatus;
    mode?: BidMode;
    /**
     * bid lot weighed completed
     */
    weighedQuantity?: number;
    /**
     * total weight of bid
     */
    absoluteTotalWeight?: number;
    /**
     * updated total weight of bid
     */
    updatedTotalWeight?: number;
    /**
     * advance amount paid by the buyer
     */
    advancePrice?: number;
}
