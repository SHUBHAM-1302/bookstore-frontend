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

/**
 * Indicates different modes of bidding
 */
export interface BidMode { 
    /**
     * Different modes of bidding.
     */
    status?: BidMode.StatusEnum;
}
export namespace BidMode {
    export type StatusEnum = 'NORMAL' | 'CROSS-OVER' | 'SELF';
    export const StatusEnum = {
        NORMAL: 'NORMAL' as StatusEnum,
        CROSSOVER: 'CROSS-OVER' as StatusEnum,
        SELF: 'SELF' as StatusEnum
    };
}