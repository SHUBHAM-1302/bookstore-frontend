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
import { MtraceCommodity } from './mtraceCommodity';
import { UpsertInfo } from './upsertInfo';

export interface UserChart { 
    /**
     * primary key generated when object is created
     */
    readonly userChartId?: number;
    /**
     * title of chart created by user
     */
    userChartTitle?: string;
    commodity?: MtraceCommodity;
    upsertInfo?: UpsertInfo;
}