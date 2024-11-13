/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SalespadWeightSumData } from '../models/salespad-weight-sum-data';

@Injectable({
  providedIn: 'root',
})
export class BidGroupingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSalesSummaryFromSoId
   */
  static readonly GetSalesSummaryFromSoIdPath = '/v1/md/sp/summary/so/{soid}/';

  /**
   * get salesSummary from Sale order id.
   *
   * get salesSummary from Sale order id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSalesSummaryFromSoId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalesSummaryFromSoId$Response(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalespadWeightSumData>> {

    const rb = new RequestBuilder(this.rootUrl, BidGroupingService.GetSalesSummaryFromSoIdPath, 'get');
    if (params) {
      rb.path('soid', params.soid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalespadWeightSumData>;
      })
    );
  }

  /**
   * get salesSummary from Sale order id.
   *
   * get salesSummary from Sale order id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSalesSummaryFromSoId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalesSummaryFromSoId(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;
  },
  context?: HttpContext

): Observable<SalespadWeightSumData> {

    return this.getSalesSummaryFromSoId$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalespadWeightSumData>) => r.body as SalespadWeightSumData)
    );
  }

}
