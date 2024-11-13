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

import { LotBroker } from '../models/lot-broker';
import { LotBuyer } from '../models/lot-buyer';
import { SpPatchDocument } from '../models/sp-patch-document';

@Injectable({
  providedIn: 'root',
})
export class BuyerSalePadService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateLotBroker
   */
  static readonly UpdateLotBrokerPath = '/v1/md/sp/{spadid}/{lotid}/broker/{ltbrokerid}/';

  /**
   * update lotBroker sale pad.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLotBroker()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateLotBroker$Response(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier for the LotBroker
     */
    ltbrokerid: number;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: SpPatchDocument
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LotBroker>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerSalePadService.UpdateLotBrokerPath, 'patch');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
      rb.path('ltbrokerid', params.ltbrokerid, {});
      rb.header('userId', params.userId, {});
      rb.body(params.body, 'application/json-patch+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LotBroker>;
      })
    );
  }

  /**
   * update lotBroker sale pad.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateLotBroker$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateLotBroker(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier for the LotBroker
     */
    ltbrokerid: number;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: SpPatchDocument
  },
  context?: HttpContext

): Observable<LotBroker> {

    return this.updateLotBroker$Response(params,context).pipe(
      map((r: StrictHttpResponse<LotBroker>) => r.body as LotBroker)
    );
  }

  /**
   * Path part for operation getBuyerForSalespad
   */
  static readonly GetBuyerForSalespadPath = '/v1/md/sp/{spadid}/{lotid}/buyer/';

  /**
   * get buyers for the current salespad.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBuyerForSalespad()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBuyerForSalespad$Response(params: {

    /**
     * A unique identifier for salespad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LotBuyer>>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerSalePadService.GetBuyerForSalespadPath, 'get');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LotBuyer>>;
      })
    );
  }

  /**
   * get buyers for the current salespad.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBuyerForSalespad$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBuyerForSalespad(params: {

    /**
     * A unique identifier for salespad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;
  },
  context?: HttpContext

): Observable<Array<LotBuyer>> {

    return this.getBuyerForSalespad$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LotBuyer>>) => r.body as Array<LotBuyer>)
    );
  }

  /**
   * Path part for operation createBuyer
   */
  static readonly CreateBuyerPath = '/v1/md/sp/{spadid}/{lotid}/buyer/';

  /**
   * create new buyer for the current salespad.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createBuyer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createBuyer$Response(params: {

    /**
     * A unique identifier for salespad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Creates new buyer record with unqiue buyer id for the transcation
     */
    body: LotBuyer
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LotBuyer>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerSalePadService.CreateBuyerPath, 'post');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
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
        return r as StrictHttpResponse<LotBuyer>;
      })
    );
  }

  /**
   * create new buyer for the current salespad.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createBuyer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createBuyer(params: {

    /**
     * A unique identifier for salespad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Creates new buyer record with unqiue buyer id for the transcation
     */
    body: LotBuyer
  },
  context?: HttpContext

): Observable<LotBuyer> {

    return this.createBuyer$Response(params,context).pipe(
      map((r: StrictHttpResponse<LotBuyer>) => r.body as LotBuyer)
    );
  }

  /**
   * Path part for operation getBuyerByMarkForSalespad
   */
  static readonly GetBuyerByMarkForSalespadPath = '/v1/md/sp/{spadid}/{lotid}/buyer/mark/{mark}/';

  /**
   * get buyers for the current salespad By mark.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBuyerByMarkForSalespad()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBuyerByMarkForSalespad$Response(params: {

    /**
     * A unique identifier for salespad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier for salespad
     */
    mark: string;

    /**
     * A unique identifier for salespad
     */
    splitId?: number;

    /**
     * A unique identifier for salespad
     */
    buyerUuid?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LotBuyer>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerSalePadService.GetBuyerByMarkForSalespadPath, 'get');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
      rb.path('mark', params.mark, {});
      rb.query('splitId', params.splitId, {});
      rb.query('buyerUuid', params.buyerUuid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LotBuyer>;
      })
    );
  }

  /**
   * get buyers for the current salespad By mark.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBuyerByMarkForSalespad$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBuyerByMarkForSalespad(params: {

    /**
     * A unique identifier for salespad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier for salespad
     */
    mark: string;

    /**
     * A unique identifier for salespad
     */
    splitId?: number;

    /**
     * A unique identifier for salespad
     */
    buyerUuid?: string;
  },
  context?: HttpContext

): Observable<LotBuyer> {

    return this.getBuyerByMarkForSalespad$Response(params,context).pipe(
      map((r: StrictHttpResponse<LotBuyer>) => r.body as LotBuyer)
    );
  }

  /**
   * Path part for operation deleteBuyerById
   */
  static readonly DeleteBuyerByIdPath = '/v1/md/sp/{spadid}/{lotid}/buyer/{ltbuyid}/';

  /**
   * delete buyer with buyer id .
   *
   * delete buyer with buyer id .
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBuyerById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBuyerById$Response(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier of buyer for the lot .
     */
    ltbuyid: number;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerSalePadService.DeleteBuyerByIdPath, 'delete');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
      rb.path('ltbuyid', params.ltbuyid, {});
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
   * delete buyer with buyer id .
   *
   * delete buyer with buyer id .
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBuyerById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBuyerById(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier of buyer for the lot .
     */
    ltbuyid: number;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteBuyerById$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateLotBuyer
   */
  static readonly UpdateLotBuyerPath = '/v1/md/sp/{spadid}/{lotid}/buyer/{ltbuyid}/';

  /**
   * update lotBuyer sale pad.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLotBuyer()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateLotBuyer$Response(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier for the LotBuyer
     */
    ltbuyid: number;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: SpPatchDocument
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LotBuyer>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerSalePadService.UpdateLotBuyerPath, 'patch');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
      rb.path('ltbuyid', params.ltbuyid, {});
      rb.header('userId', params.userId, {});
      rb.body(params.body, 'application/json-patch+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LotBuyer>;
      })
    );
  }

  /**
   * update lotBuyer sale pad.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateLotBuyer$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateLotBuyer(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier for the LotBuyer
     */
    ltbuyid: number;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: SpPatchDocument
  },
  context?: HttpContext

): Observable<LotBuyer> {

    return this.updateLotBuyer$Response(params,context).pipe(
      map((r: StrictHttpResponse<LotBuyer>) => r.body as LotBuyer)
    );
  }

}
