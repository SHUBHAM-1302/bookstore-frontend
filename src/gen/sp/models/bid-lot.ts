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
import { AliasBuyer } from './aliasBuyer';
import { BidMode } from './bidMode';
import { BidStatus } from './bidStatus';
import { LotBroker } from './lotBroker';
import { LotBuyer } from './lotBuyer';
import { UpsertInfo } from './upsertInfo';

export interface BidLot {
    /**
     * Bid id generated on successful insertion
     */
    readonly bidId?: number;
    tenantid?: string;
    /**
     * generated for bid used for transcation management
     */
    readonly spId?: string;
    /**
     * bid qunatity from the buyer for the lot
     */
    bidquantity?: number;
    /**
     * bid qunatity from the buyer for the lot
     */
    lotquantity?: number;
    /**
     * bid amount from the buyer for the lot
     */
    bidPrice?: number;
    /**
     * advance amount paid by the buyer
     */
    advancePrice?: number;
    /**
     * summed up weight info of the bidded lot
     */
    totalWeight?: number;
    bidContainerId?: number;
    additionalBidPrice?: number;
    /**
     * Lot id for which split is done
     */
    readonly lotId?: number;
    lotBuyer?: LotBuyer;
    status?: BidStatus;
    mode?: BidMode;
    aliasbuyer?: AliasBuyer;
    lotBroker?: LotBroker;
    upsertInfo?: UpsertInfo;
}