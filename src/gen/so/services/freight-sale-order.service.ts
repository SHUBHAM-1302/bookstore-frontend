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

import { Freight } from '../models/freight';
import { PatchRequest } from '../models/patch-request';

@Injectable({
  providedIn: 'root',
})
export class FreightSaleOrderService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getFreight
   */
  static readonly GetFreightPath = '/v1/md/so/{soid}/frg/';

  /**
   * get a freight based on sale order id.
   *
   * get a freight based on sale order id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFreight()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFreight$Response(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Freight>> {

    const rb = new RequestBuilder(this.rootUrl, FreightSaleOrderService.GetFreightPath, 'get');
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
        return r as StrictHttpResponse<Freight>;
      })
    );
  }

  /**
   * get a freight based on sale order id.
   *
   * get a freight based on sale order id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFreight$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFreight(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;
  },
  context?: HttpContext

): Observable<Freight> {

    return this.getFreight$Response(params,context).pipe(
      map((r: StrictHttpResponse<Freight>) => r.body as Freight)
    );
  }

  /**
   * Path part for operation createFreightSaleOrder
   */
  static readonly CreateFreightSaleOrderPath = '/v1/md/so/{soid}/frg/';

  /**
   * create a freight based on sale order id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createFreightSaleOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFreightSaleOrder$Response(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;

    /**
     * Creates new freight record with unqiue freight id for the transcation
     */
    body: Freight
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Freight>> {

    const rb = new RequestBuilder(this.rootUrl, FreightSaleOrderService.CreateFreightSaleOrderPath, 'post');
    if (params) {
      rb.path('soid', params.soid, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Freight>;
      })
    );
  }

  /**
   * create a freight based on sale order id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createFreightSaleOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFreightSaleOrder(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;

    /**
     * Creates new freight record with unqiue freight id for the transcation
     */
    body: Freight
  },
  context?: HttpContext

): Observable<Freight> {

    return this.createFreightSaleOrder$Response(params,context).pipe(
      map((r: StrictHttpResponse<Freight>) => r.body as Freight)
    );
  }

  /**
   * Path part for operation deleteFreight
   */
  static readonly DeleteFreightPath = '/v1/md/so/{soid}/frg/';

  /**
   * delete a Freight.
   *
   * Deletes a Freight
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFreight()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFreight$Response(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FreightSaleOrderService.DeleteFreightPath, 'delete');
    if (params) {
      rb.path('soid', params.soid, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * delete a Freight.
   *
   * Deletes a Freight
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteFreight$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFreight(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteFreight$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateFreight
   */
  static readonly UpdateFreightPath = '/v1/md/so/{soid}/frg/';

  /**
   * update freight record.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateFreight()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateFreight$Response(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: PatchRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Freight>> {

    const rb = new RequestBuilder(this.rootUrl, FreightSaleOrderService.UpdateFreightPath, 'patch');
    if (params) {
      rb.path('soid', params.soid, {});
      rb.body(params.body, 'application/json-patch+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Freight>;
      })
    );
  }

  /**
   * update freight record.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateFreight$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateFreight(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: PatchRequest
  },
  context?: HttpContext

): Observable<Freight> {

    return this.updateFreight$Response(params,context).pipe(
      map((r: StrictHttpResponse<Freight>) => r.body as Freight)
    );
  }

}
