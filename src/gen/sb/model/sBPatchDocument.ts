/**
 * Salesbill
 * This would cover the definition and documentation of the Mercodesk sales bills for the commidities completed the bids and weighing. Operation involves creation on sales bill for the salespad items, commission, brokerage and pending bill details Salesbill is mainly targets the buyer and broker and provide the draft bill to be settled with merchants. REST end points would use the host and port defined by the admin and the end points would follow the usual standards and best practices as defined on the general REST API documentations. The http method type would define the underlying action.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: merco@kanilebettu.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * A JSONPatch document as defined by RFC 6902
 */
export interface SBPatchDocument { 
    /**
     * The operation to be performed
     */
    op: SBPatchDocument.OpEnum;
    /**
     * A JSON-Pointer
     */
    path: string;
    /**
     * The value to be used within the operations.
     */
    value?: any;
    /**
     * A string containing a JSON Pointer value.
     */
    from?: string;
}
export namespace SBPatchDocument {
    export type OpEnum = 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
    export const OpEnum = {
        Add: 'add' as OpEnum,
        Remove: 'remove' as OpEnum,
        Replace: 'replace' as OpEnum,
        Move: 'move' as OpEnum,
        Copy: 'copy' as OpEnum,
        Test: 'test' as OpEnum
    };
}