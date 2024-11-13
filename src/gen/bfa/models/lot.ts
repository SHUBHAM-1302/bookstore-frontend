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
import { UpsertInfo } from './upsertInfo';

export interface Lot {
    /**
     * lot id generated on successful insertion
     */
    readonly lotId?: number;
    /**
     * identification of lot .
     */
    name?: string;
    /**
     * cmd sub type id generated on successful insertion
     */
    cmdSubType?: number;
    /**
     * commodity name
     */
    readonly cmdTypeName?: string;
    /**
     * cmd type id generated on successful insertion
     */
    cmdTypeid?: number;
    /**
     * name of the package type .
     */
    readonly packtypeName?: string;
    /**
     * Different states of Sale order.
     */
    readonly status?: Lot.StatusEnum;
    /**
     * package type id generated on successful insertion .
     */
    packtypeid?: number;
    /**
     * number of lot quantity .
     */
    quantity?: number;
    /**
     * number of lot quantity of bids .
     */
    bidQuantity?: number;
    /**
     * number of maximum price of lot .
     */
    bidMaxPrice?: number;
    /**
     * number of minimum price of lot .
     */
    bidMinPrice?: number;
    /**
     * number of weighedQuanityt of package lots .
     */
    weighedQuantity?: number;
    upsertInfo?: UpsertInfo;
}
export namespace Lot {
    export type StatusEnum = 'SO_LOT_OPEN' | 'SO_LOT_POST_WEIGHING' | 'SO_LOT_BIDDING_STARTED';
    export const StatusEnum = {
        OPEN: 'SO_LOT_OPEN' as StatusEnum,
        POSTWEIGHING: 'SO_LOT_POST_WEIGHING' as StatusEnum,
        BIDDINGSTARTED: 'SO_LOT_BIDDING_STARTED' as StatusEnum
    };
}