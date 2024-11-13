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
import { MDReportContext } from './mDReportContext';
import { MDReportEquation } from './mDReportEquation';
import { MDReportSearchCriteriaTxn } from './mDReportSearchCriteriaTxn';
import { UpsertInfo } from './upsertInfo';

export interface MDReportDocket {
    /**
     * MDReportDocket id generated on successful
     */
    readonly docketId?: string;
    /**
     * prefix obtained from shop Manager
     */
    reportPrefix?: string;
    /**
     * docket id
     */
    readonly reportNo?: number;
    /**
     * number obtained from shop manager
     */
    reportStartNumber?: number;
    /**
     * Name of the report given by the user
     */
    reportName?: string;
    /**
     * type of the report given by the user
     */
    reportDescription?: string;
    /**
     * type of date range
     */
    dateType?: string;
    /**
     * start date
     */
    startDate?: string;
    /**
     * end date
     */
    endDate?: string;
    /**
     * pdf
     */
    format?: string;
    mdReportContextTxn?: Array<MDReportContext>;
    mdReportSearchCriteriaTxn?: Array<MDReportSearchCriteriaTxn>;
    mdReportEquation?: Array<MDReportEquation>;
    upsertInfo?: UpsertInfo;
}
