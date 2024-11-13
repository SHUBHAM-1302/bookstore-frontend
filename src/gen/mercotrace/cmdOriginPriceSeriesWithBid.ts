/**
 * Mercotrace
 * This would cover the definition and documentation of the mercotrace along with the REST end point, incoming request payload format and different responses for posting commodities and getting Trasactions of user. All the REST end points would use the host and port defined by the admin and the end points would follow the usual standards and best practices as defined on the general REST API documentations. The http method type  would define the underlying action.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: merco@kanilebettu.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BiddingData } from './biddingData';

export interface CmdOriginPriceSeriesWithBid { 
    /**
     * primary key generated when object is created
     */
    readonly cmdOriginPriceSeriesId?: number;
    /**
     * id of  address
     */
    commodityAddressId?: number;
    /**
     * commodity Address state Name
     */
    commodityStateName?: string;
    /**
     * commodity Address district Name
     */
    commodityDistrictName?: string;
    /**
     * commodity Address Name
     */
    readonly commodityAddressName?: string;
    /**
     * uuid of organization
     */
    soId?: string;
    /**
     * uuid of organization
     */
    spadId?: string;
    properties?: Array<BiddingData>;
    /**
     * maximum price of commodity
     */
    maxPrice?: number;
    /**
     * minimum price of commodity
     */
    minPrice?: number;
    /**
     * minimum price of commodity
     */
    avgPrice?: number;
    /**
     * quantity of goods
     */
    quantity?: number;
    /**
     * quantity of goods
     */
    ratePer?: string;
}