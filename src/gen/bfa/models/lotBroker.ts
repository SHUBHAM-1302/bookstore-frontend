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

export interface LotBroker {
    /**
     * broker id obtained from the access management
     */
    brokerId?: string;
    /**
     * identification of broker for specific sale order
     */
    mark?: string;
    /**
     * buyer first name obtained from the access management
     */
    readonly FirstName?: string;
    /**
     * buyer Last name obtained from the access management
     */
    readonly LastName?: string;
    /**
     * buyer user name obtained from the access management
     */
    readonly UserName?: string;
    /**
     * Broker mark associated with
     */
    readonly lotBrokerId?: number;
    /**
     * Lot id for which split is done
     */
    lotId?: number;
    upsertInfo?: UpsertInfo;
}