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

import { BuyerLotBid } from '../models/buyer-lot-bid';
import { SpPatchDocument } from '../models/sp-patch-document';
import { SalePad } from '../models/sale-pad';
import { SalesPadSummary } from '../models/sales-pad-summary';
import { SalespadStatus } from '../models/salespad-status';
import { WeighingInfo } from '../models/weighing-info';

@Injectable({
  providedIn: 'root',
})
export class SalePadService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createSalepad
   */
  static readonly CreateSalepadPath = '/v1/md/sp/tenant/55331f7a-5b55-4a1c-8036-37218e014aad/so/';

  /**
   * create sale pad based on Sale order id.
   *
   * create sale pad based on sale id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSalepad()` instead.
   *
   * This method doesn't expect any request body.
   */
  createSalepad$Response(params: {

    /**
     * A unique identifier for organisation
     */
    receiverid: string;

    /**
     * A unique identifier for sale order
     */
    soid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalePad>> {

    const rb = new RequestBuilder(this.rootUrl, SalePadService.CreateSalepadPath, 'post');
    if (params) {
      rb.path('receiverid', params.receiverid, {});
      rb.path('soid', params.soid, {});
      rb.header('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalePad>;
      })
    );
  }

  /**
   * create sale pad based on Sale order id.
   *
   * create sale pad based on sale id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createSalepad$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createSalepad(params: {

    /**
     * A unique identifier for organisation
     */
    receiverid: string;

    /**
     * A unique identifier for sale order
     */
    soid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<SalePad> {

    return this.createSalepad$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalePad>) => r.body as SalePad)
    );
  }

  /**
   * Path part for operation getSalepadFromsoId
   */
  static readonly GetSalepadFromsoIdPath = '/v1/md/sp/so/{soid}/';

  /**
   * get salepad id from Sale order id.
   *
   * create sale pad based on sale id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSalepadFromsoId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalepadFromsoId$Response(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalePad>> {

    const rb = new RequestBuilder(this.rootUrl, SalePadService.GetSalepadFromsoIdPath, 'get');
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
        return r as StrictHttpResponse<SalePad>;
      })
    );
  }

  /**
   * get salepad id from Sale order id.
   *
   * create sale pad based on sale id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSalepadFromsoId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalepadFromsoId(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;
  },
  context?: HttpContext

): Observable<SalePad> {

    return this.getSalepadFromsoId$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalePad>) => r.body as SalePad)
    );
  }

  /**
   * Path part for operation getSalePadSummarybyspadId
   */
  static readonly GetSalePadSummarybyspadIdPath = '/v1/md/sp/{spadid}/';

  /**
   * get summary of sale pad based on Salespad Id.
   *
   * request to send all sale pad
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSalePadSummarybyspadId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalePadSummarybyspadId$Response(params: {

    /**
     * A unique identifier for salespad
     */
    spadid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesPadSummary>> {

    const rb = new RequestBuilder(this.rootUrl, SalePadService.GetSalePadSummarybyspadIdPath, 'get');
    if (params) {
      rb.path('spadid', params.spadid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesPadSummary>;
      })
    );
  }

  /**
   * get summary of sale pad based on Salespad Id.
   *
   * request to send all sale pad
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSalePadSummarybyspadId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalePadSummarybyspadId(params: {

    /**
     * A unique identifier for salespad
     */
    spadid: string;
  },
  context?: HttpContext

): Observable<SalesPadSummary> {

    return this.getSalePadSummarybyspadId$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesPadSummary>) => r.body as SalesPadSummary)
    );
  }

  /**
   * Path part for operation deleteSalepad
   */
  static readonly DeleteSalepadPath = '/v1/md/sp/{spadid}/';

  /**
   * delete salepad based on spadId.
   *
   * delete salepad based on spadId
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSalepad()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSalepad$Response(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SalePadService.DeleteSalepadPath, 'delete');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.header('userId', params.userId, {});
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
   * delete salepad based on spadId.
   *
   * delete salepad based on spadId
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSalepad$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSalepad(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteSalepad$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getSalePadStatusbySpadId
   */
  static readonly GetSalePadStatusbySpadIdPath = '/v1/md/sp/{spadid}/status/';

  /**
   * get status of sale pad based on salespad Id.
   *
   * get status of sale pad based on sales pad id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSalePadStatusbySpadId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalePadStatusbySpadId$Response(params: {

    /**
     * A unique identifier for sales pad id
     */
    spadid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalespadStatus>> {

    const rb = new RequestBuilder(this.rootUrl, SalePadService.GetSalePadStatusbySpadIdPath, 'get');
    if (params) {
      rb.path('spadid', params.spadid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalespadStatus>;
      })
    );
  }

  /**
   * get status of sale pad based on salespad Id.
   *
   * get status of sale pad based on sales pad id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSalePadStatusbySpadId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalePadStatusbySpadId(params: {

    /**
     * A unique identifier for sales pad id
     */
    spadid: string;
  },
  context?: HttpContext

): Observable<SalespadStatus> {

    return this.getSalePadStatusbySpadId$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalespadStatus>) => r.body as SalespadStatus)
    );
  }

  /**
   * Path part for operation updateSalePadStatusbySpadId
   */
  static readonly UpdateSalePadStatusbySpadIdPath = '/v1/md/sp/{spadid}/status/';

  /**
   * Patch status of sale pad based on salespad Id.
   *
   * Patch status of sale pad based on sales pad id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSalePadStatusbySpadId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSalePadStatusbySpadId$Response(params: {

    /**
     * A unique identifier for sales pad id
     */
    spadid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body?: SpPatchDocument
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalePad>> {

    const rb = new RequestBuilder(this.rootUrl, SalePadService.UpdateSalePadStatusbySpadIdPath, 'patch');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.header('userId', params.userId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalePad>;
      })
    );
  }

  /**
   * Patch status of sale pad based on salespad Id.
   *
   * Patch status of sale pad based on sales pad id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSalePadStatusbySpadId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSalePadStatusbySpadId(params: {

    /**
     * A unique identifier for sales pad id
     */
    spadid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body?: SpPatchDocument
  },
  context?: HttpContext

): Observable<SalePad> {

    return this.updateSalePadStatusbySpadId$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalePad>) => r.body as SalePad)
    );
  }

  /**
   * Path part for operation getBidsByMark
   */
  static readonly GetBidsByMarkPath = '/v1/md/sp/bid/';

  /**
   * get the bids for search criteria.
   *
   * get the bids for search criteria
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBidsByMark()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBidsByMark$Response(params: {

    /**
     * Search criteria for status of bid.
     */
    status: 'OPEN' | 'INPROGRESS' | 'POSTWEIGHING' | 'COMPLETED';

    /**
     * Search criteria
     */
    buyerMark: string;

    /**
     * Search criteria
     */
    additionalMark?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<BuyerLotBid>>> {

    const rb = new RequestBuilder(this.rootUrl, SalePadService.GetBidsByMarkPath, 'get');
    if (params) {
      rb.query('status', params.status, {});
      rb.query('buyerMark', params.buyerMark, {});
      rb.query('additionalMark', params.additionalMark, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BuyerLotBid>>;
      })
    );
  }

  /**
   * get the bids for search criteria.
   *
   * get the bids for search criteria
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBidsByMark$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBidsByMark(params: {

    /**
     * Search criteria for status of bid.
     */
    status: 'OPEN' | 'INPROGRESS' | 'POSTWEIGHING' | 'COMPLETED';

    /**
     * Search criteria
     */
    buyerMark: string;

    /**
     * Search criteria
     */
    additionalMark?: string;
  },
  context?: HttpContext

): Observable<Array<BuyerLotBid>> {

    return this.getBidsByMark$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<BuyerLotBid>>) => r.body as Array<BuyerLotBid>)
    );
  }

  /**
   * Path part for operation getDiscardedWeighingInfoForSalepad
   */
  static readonly GetDiscardedWeighingInfoForSalepadPath = '/v1/md/sp/{spadid}/weigh/';

  /**
   * get the discarded weights for salepad.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDiscardedWeighingInfoForSalepad()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDiscardedWeighingInfoForSalepad$Response(params: {

    /**
     * A unique identifier for sales pad id
     */
    spadid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WeighingInfo>>> {

    const rb = new RequestBuilder(this.rootUrl, SalePadService.GetDiscardedWeighingInfoForSalepadPath, 'get');
    if (params) {
      rb.path('spadid', params.spadid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WeighingInfo>>;
      })
    );
  }

  /**
   * get the discarded weights for salepad.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDiscardedWeighingInfoForSalepad$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDiscardedWeighingInfoForSalepad(params: {

    /**
     * A unique identifier for sales pad id
     */
    spadid: string;
  },
  context?: HttpContext

): Observable<Array<WeighingInfo>> {

    return this.getDiscardedWeighingInfoForSalepad$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WeighingInfo>>) => r.body as Array<WeighingInfo>)
    );
  }

}
