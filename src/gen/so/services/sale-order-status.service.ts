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

import { SaleOrderStatus } from '../models/sale-order-status';

@Injectable({
  providedIn: 'root',
})
export class SaleOrderStatusService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSaleOrderStatusbyId
   */
  static readonly GetSaleOrderStatusbyIdPath = '/v1/md/so/{soid}/status';

  /**
   * get current status of sale order based on id.
   *
   * get current status of sale order based on id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSaleOrderStatusbyId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSaleOrderStatusbyId$Response(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SaleOrderStatus>> {

    const rb = new RequestBuilder(this.rootUrl, SaleOrderStatusService.GetSaleOrderStatusbyIdPath, 'get');
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
        return r as StrictHttpResponse<SaleOrderStatus>;
      })
    );
  }

  /**
   * get current status of sale order based on id.
   *
   * get current status of sale order based on id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSaleOrderStatusbyId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSaleOrderStatusbyId(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;
  },
  context?: HttpContext

): Observable<SaleOrderStatus> {

    return this.getSaleOrderStatusbyId$Response(params,context).pipe(
      map((r: StrictHttpResponse<SaleOrderStatus>) => r.body as SaleOrderStatus)
    );
  }

}
