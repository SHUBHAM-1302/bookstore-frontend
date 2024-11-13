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
import { UpsertInfo } from './upsertInfo';

export interface MtraceMart { 
    /**
     * Name of the farm
     */
    name?: string;
    locationId?: number;
    martServiceCategory?: MtraceMart.MartServiceCategoryEnum;
    martCategory?: MtraceMart.MartCategoryEnum;
    userUuId?: Array<string>;
    upsertInfo?: UpsertInfo;
}
export namespace MtraceMart {
    export type MartServiceCategoryEnum = 'TRANSPORT' | 'ACCOUNTANT';
    export const MartServiceCategoryEnum = {
        TRANSPORT: 'TRANSPORT' as MartServiceCategoryEnum,
        ACCOUNTANT: 'ACCOUNTANT' as MartServiceCategoryEnum
    };
    export type MartCategoryEnum = 'FARM' | 'SHOP' | 'TRACESERVICE';
    export const MartCategoryEnum = {
        FARM: 'FARM' as MartCategoryEnum,
        SHOP: 'SHOP' as MartCategoryEnum,
        TRACESERVICE: 'TRACESERVICE' as MartCategoryEnum
    };
}