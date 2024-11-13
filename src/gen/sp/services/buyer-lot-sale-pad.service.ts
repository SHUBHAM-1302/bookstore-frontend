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

import { BidLot } from '../models/bid-lot';
import { BidLotInput } from '../models/bid-lot-input';
import { BuyerLotBid } from '../models/buyer-lot-bid';
import { SpPatchRequest } from '../models/sp-patch-request';
import { WeighingInfo } from '../models/weighing-info';

@Injectable({
  providedIn: 'root',
})
export class BuyerLotSalePadService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getBidsByBuyerUuid
   */
  static readonly GetBidsByBuyerUuidPath = '/v1/md/sp/bid/buyer/';

  /**
   * get the bids for search criteria.
   *
   * get the bids for search criteria
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBidsByBuyerUuid()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBidsByBuyerUuid$Response(params: {

    /**
     * Search criteria for status of bid.
     */
    status: 'OPEN' | 'INPROGRESS' | 'POSTWEIGHING' | 'COMPLETED';

    /**
     * Search criteria
     */
    buyerUUID: string;

    /**
     * Search criteria
     */
    brokerUUID?: string;

    /**
     * Search criteria
     */
    aliasMark?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<BuyerLotBid>>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerLotSalePadService.GetBidsByBuyerUuidPath, 'get');
    if (params) {
      rb.query('status', params.status, {});
      rb.query('buyerUUID', params.buyerUUID, {});
      rb.query('brokerUUID', params.brokerUUID, {});
      rb.query('aliasMark', params.aliasMark, {});
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
   * To access the full response (for headers, for example), `getBidsByBuyerUuid$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBidsByBuyerUuid(params: {

    /**
     * Search criteria for status of bid.
     */
    status: 'OPEN' | 'INPROGRESS' | 'POSTWEIGHING' | 'COMPLETED';

    /**
     * Search criteria
     */
    buyerUUID: string;

    /**
     * Search criteria
     */
    brokerUUID?: string;

    /**
     * Search criteria
     */
    aliasMark?: string;
  },
  context?: HttpContext

): Observable<Array<BuyerLotBid>> {

    return this.getBidsByBuyerUuid$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<BuyerLotBid>>) => r.body as Array<BuyerLotBid>)
    );
  }

  /**
   * Path part for operation getBidsbasedOnLotId
   */
  static readonly GetBidsbasedOnLotIdPath = '/v1/md/sp/{spadid}/{lotid}/bid/';

  /**
   * get all bids for selected lot id.
   *
   * get all the bids for selected lot id from seller .
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBidsbasedOnLotId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBidsbasedOnLotId$Response(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier of lot split
     */
    splitId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<BuyerLotBid>>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerLotSalePadService.GetBidsbasedOnLotIdPath, 'get');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
      rb.query('splitId', params.splitId, {});
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
   * get all bids for selected lot id.
   *
   * get all the bids for selected lot id from seller .
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBidsbasedOnLotId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBidsbasedOnLotId(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of lot id
     */
    lotid: number;

    /**
     * A unique identifier of lot split
     */
    splitId?: number;
  },
  context?: HttpContext

): Observable<Array<BuyerLotBid>> {

    return this.getBidsbasedOnLotId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<BuyerLotBid>>) => r.body as Array<BuyerLotBid>)
    );
  }

  /**
   * Path part for operation createBiDLotForBuyer
   */
  static readonly CreateBiDLotForBuyerPath = '/v1/md/sp/{spadid}/{lotid}/{ltbuyid}/bid/';

  /**
   * create new bids for goods purchase from sales pad.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createBiDLotForBuyer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createBiDLotForBuyer$Response(params: {

    /**
     * A unique identifier for the Salepad
     */
    spadid: string;

    /**
     * A unique identifier buyer
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

    /**
     * Creates the bid lot for Salespad
     */
    body?: BidLotInput
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BidLot>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerLotSalePadService.CreateBiDLotForBuyerPath, 'post');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
      rb.path('ltbuyid', params.ltbuyid, {});
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
        return r as StrictHttpResponse<BidLot>;
      })
    );
  }

  /**
   * create new bids for goods purchase from sales pad.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createBiDLotForBuyer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createBiDLotForBuyer(params: {

    /**
     * A unique identifier for the Salepad
     */
    spadid: string;

    /**
     * A unique identifier buyer
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

    /**
     * Creates the bid lot for Salespad
     */
    body?: BidLotInput
  },
  context?: HttpContext

): Observable<BidLot> {

    return this.createBiDLotForBuyer$Response(params,context).pipe(
      map((r: StrictHttpResponse<BidLot>) => r.body as BidLot)
    );
  }

  /**
   * Path part for operation getBidbasedOnSpId
   */
  static readonly GetBidbasedOnSpIdPath = '/v1/md/sp/bid/{spid}/';

  /**
   * get bid based on spID.
   *
   * get bid based on spID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBidbasedOnSpId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBidbasedOnSpId$Response(params: {

    /**
     * A unique identifier for the bid lot id
     */
    spid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BuyerLotBid>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerLotSalePadService.GetBidbasedOnSpIdPath, 'get');
    if (params) {
      rb.path('spid', params.spid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BuyerLotBid>;
      })
    );
  }

  /**
   * get bid based on spID.
   *
   * get bid based on spID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBidbasedOnSpId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBidbasedOnSpId(params: {

    /**
     * A unique identifier for the bid lot id
     */
    spid: string;
  },
  context?: HttpContext

): Observable<BuyerLotBid> {

    return this.getBidbasedOnSpId$Response(params,context).pipe(
      map((r: StrictHttpResponse<BuyerLotBid>) => r.body as BuyerLotBid)
    );
  }

  /**
   * Path part for operation getBuyerbasedOnSpId
   */
  static readonly GetBuyerbasedOnSpIdPath = '/v1/md/sp/{spadid}/{lotid}/{ltbuyid}/bid/{spid}/';

  /**
   * get bid for the spadId based on spID.
   *
   * gets the buyer bid details for spId
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBuyerbasedOnSpId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBuyerbasedOnSpId$Response(params: {

    /**
     * A unique identifier for the salespad
     */
    spadid: string;

    /**
     * A unique identifier buyer
     */
    lotid: number;

    /**
     * A unique identifier of buyer for the lot .
     */
    ltbuyid: number;

    /**
     * A unique identifier for the bid lot id
     */
    spid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BuyerLotBid>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerLotSalePadService.GetBuyerbasedOnSpIdPath, 'get');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
      rb.path('ltbuyid', params.ltbuyid, {});
      rb.path('spid', params.spid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BuyerLotBid>;
      })
    );
  }

  /**
   * get bid for the spadId based on spID.
   *
   * gets the buyer bid details for spId
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBuyerbasedOnSpId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBuyerbasedOnSpId(params: {

    /**
     * A unique identifier for the salespad
     */
    spadid: string;

    /**
     * A unique identifier buyer
     */
    lotid: number;

    /**
     * A unique identifier of buyer for the lot .
     */
    ltbuyid: number;

    /**
     * A unique identifier for the bid lot id
     */
    spid: string;
  },
  context?: HttpContext

): Observable<BuyerLotBid> {

    return this.getBuyerbasedOnSpId$Response(params,context).pipe(
      map((r: StrictHttpResponse<BuyerLotBid>) => r.body as BuyerLotBid)
    );
  }

  /**
   * Path part for operation deleteBuyerBidLot
   */
  static readonly DeleteBuyerBidLotPath = '/v1/md/sp/{spadid}/{lotid}/{ltbuyid}/bid/{spid}/';

  /**
   * delete bid lot assocaited for buyer.
   *
   * Deletes bid lot of the buyer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBuyerBidLot()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBuyerBidLot$Response(params: {

    /**
     * A unique identifier for the Salespad
     */
    spadid: string;

    /**
     * A unique identifier buyer
     */
    lotid: number;

    /**
     * A unique identifier of buyer for the lot .
     */
    ltbuyid: number;

    /**
     * A unique identifier for the bid lot id
     */
    spid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerLotSalePadService.DeleteBuyerBidLotPath, 'delete');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
      rb.path('ltbuyid', params.ltbuyid, {});
      rb.path('spid', params.spid, {});
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
   * delete bid lot assocaited for buyer.
   *
   * Deletes bid lot of the buyer
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBuyerBidLot$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBuyerBidLot(params: {

    /**
     * A unique identifier for the Salespad
     */
    spadid: string;

    /**
     * A unique identifier buyer
     */
    lotid: number;

    /**
     * A unique identifier of buyer for the lot .
     */
    ltbuyid: number;

    /**
     * A unique identifier for the bid lot id
     */
    spid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteBuyerBidLot$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateBuyerBid
   */
  static readonly UpdateBuyerBidPath = '/v1/md/sp/{spadid}/{lotid}/{ltbuyid}/bid/{spid}/';

  /**
   * update BidLot based on spId .
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBuyerBid()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateBuyerBid$Response(params: {

    /**
     * A unique identifier for the salespad
     */
    spadid: string;

    /**
     * A unique identifier buyer
     */
    lotid: number;

    /**
     * A unique identifier of buyer for the lot .
     */
    ltbuyid: number;

    /**
     * A unique identifier for the bid lot id
     */
    spid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: SpPatchRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BidLot>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerLotSalePadService.UpdateBuyerBidPath, 'patch');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
      rb.path('ltbuyid', params.ltbuyid, {});
      rb.path('spid', params.spid, {});
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
        return r as StrictHttpResponse<BidLot>;
      })
    );
  }

  /**
   * update BidLot based on spId .
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateBuyerBid$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateBuyerBid(params: {

    /**
     * A unique identifier for the salespad
     */
    spadid: string;

    /**
     * A unique identifier buyer
     */
    lotid: number;

    /**
     * A unique identifier of buyer for the lot .
     */
    ltbuyid: number;

    /**
     * A unique identifier for the bid lot id
     */
    spid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: SpPatchRequest
  },
  context?: HttpContext

): Observable<BidLot> {

    return this.updateBuyerBid$Response(params,context).pipe(
      map((r: StrictHttpResponse<BidLot>) => r.body as BidLot)
    );
  }

  /**
   * Path part for operation getWeighingDataForLotFromBuyer
   */
  static readonly GetWeighingDataForLotFromBuyerPath = '/v1/md/sp/{spadid}/buyer/{ltbuyid}/weigh/{spid}/';

  /**
   * get weighing datas for salespad for particular lot bidded by buyer.
   *
   * get weighing datas for salespad for particular lot bidded by buyer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeighingDataForLotFromBuyer()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeighingDataForLotFromBuyer$Response(params: {

    /**
     * A unique identifier for salespad
     */
    spadid: string;

    /**
     * A unique identifier of buyer for the lot .
     */
    ltbuyid: number;

    /**
     * sp id created during the bid creation
     */
    spid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WeighingInfo>>> {

    const rb = new RequestBuilder(this.rootUrl, BuyerLotSalePadService.GetWeighingDataForLotFromBuyerPath, 'get');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('ltbuyid', params.ltbuyid, {});
      rb.path('spid', params.spid, {});
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
   * get weighing datas for salespad for particular lot bidded by buyer.
   *
   * get weighing datas for salespad for particular lot bidded by buyer
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeighingDataForLotFromBuyer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeighingDataForLotFromBuyer(params: {

    /**
     * A unique identifier for salespad
     */
    spadid: string;

    /**
     * A unique identifier of buyer for the lot .
     */
    ltbuyid: number;

    /**
     * sp id created during the bid creation
     */
    spid: string;
  },
  context?: HttpContext

): Observable<Array<WeighingInfo>> {

    return this.getWeighingDataForLotFromBuyer$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WeighingInfo>>) => r.body as Array<WeighingInfo>)
    );
  }

}
