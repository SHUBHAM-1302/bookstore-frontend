/**
 * MercoDesk Master
 * This would cover the definition and documentation of the master along with the REST end point, incoming request payload format and different responses for creating a commoditytype , subCommodityType , package and frieght. All the REST end points would use the host and port defined by the admin and the end points would follow the usual standards and best practices as defined on the general REST API documentations. The http method type would define the underlying action.
 *
 * OpenAPI spec version: 0.0.2
 * Contact: merco@kanilenttu.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface PackageType { 
    /**
     * name of the package type
     */
    name?: string;
    /**
     * packid generated on successfull insertion
     */
    readonly packid?: number;
    /**
     * url for the package type icon
     */
    resource?: string;
}