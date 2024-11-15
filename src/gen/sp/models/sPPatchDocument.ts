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

/**
 * A JSONPatch document as defined by RFC 6902
 */
export interface SPPatchDocument { 
    /**
     * The operation to be performed
     */
    op: SPPatchDocument.OpEnum;
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
export namespace SPPatchDocument {
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