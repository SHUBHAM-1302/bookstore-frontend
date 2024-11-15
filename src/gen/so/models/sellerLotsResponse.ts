/**
 * SaleOrder
 * This would cover the definition and documentation of the sale order along with the REST end point, incoming request payload format and different responses for creating a sale order and frieght. All the REST end points would use the host and port defined by the admin and the end points would follow the usual standards and best practices as defined on the general REST API documentations. The http method type would define the underlying action.
 *
 * OpenAPI spec version: 0.0.2
 * Contact: merco@kanilenttu.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GroupedLotSummary } from './groupedLotSummary';
import { UpsertInfo } from './upsert-info';

export interface SellerLotsResponse {
    /**
     * seller id generated on successful insertion
     */
    readonly id?: number;
    /**
     * SellerUUid stored on successful insertion
     */
    sellerUuid?: string;
    /**
     * seller firstname from keycloak
     */
    sellerFirstName?: string;
    /**
     * seller lastname from keycloak
     */
    sellerLastName?: string;
    /**
     * the username of the seller from keycloak
     */
    sellerUserName?: string;
    upsertInfo?: UpsertInfo;
    /**
     * details of commodity,device from recorded, actual weight
     */
    groupedLots?: Array<GroupedLotSummary>;
}