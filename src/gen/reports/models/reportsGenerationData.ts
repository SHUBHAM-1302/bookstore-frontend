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

export interface ReportsGenerationData { 
    readonly reportGenerationId?: number;
    reportUrl?: string;
    reportGenerationStatus?: ReportsGenerationData.ReportGenerationStatusEnum;
}
export namespace ReportsGenerationData {
    export type ReportGenerationStatusEnum = 'REPORT_GENERATION_STARTED' | 'REPORT_DATA_FETCHED_FROM_QUERY' | 'REPORT_DATA_CONVERTED_TO_DATA_MODEL' | 'REPORT_PDF_GENERATION_COMPLETED' | 'REPORT_PDF_UPLOADED_TO_S3' | 'REPORT_GENERATION_COMPLETED' | 'REPORT_GENERATION_FAILED';
    export const ReportGenerationStatusEnum = {
        GENERATIONSTARTED: 'REPORT_GENERATION_STARTED' as ReportGenerationStatusEnum,
        DATAFETCHEDFROMQUERY: 'REPORT_DATA_FETCHED_FROM_QUERY' as ReportGenerationStatusEnum,
        DATACONVERTEDTODATAMODEL: 'REPORT_DATA_CONVERTED_TO_DATA_MODEL' as ReportGenerationStatusEnum,
        PDFGENERATIONCOMPLETED: 'REPORT_PDF_GENERATION_COMPLETED' as ReportGenerationStatusEnum,
        PDFUPLOADEDTOS3: 'REPORT_PDF_UPLOADED_TO_S3' as ReportGenerationStatusEnum,
        GENERATIONCOMPLETED: 'REPORT_GENERATION_COMPLETED' as ReportGenerationStatusEnum,
        GENERATIONFAILED: 'REPORT_GENERATION_FAILED' as ReportGenerationStatusEnum
    };
}