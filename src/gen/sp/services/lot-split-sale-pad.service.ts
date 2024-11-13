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

import { LotSplit } from '../models/lot-split';
import { SpPatchRequest } from '../models/sp-patch-request';

@Injectable({
  providedIn: 'root',
})
export class LotSplitSalePadService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getLotSplitbySoId
   */
  static readonly GetLotSplitbySoIdPath = '/v1/md/sp/{soid}/lot/ltsplt/';

  /**
   * get the lot split details for specific soid associated.
   *
   * get the lot split details for specific lots of soid
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLotSplitbySoId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLotSplitbySoId$Response(params: {

    /**
     * A unique identifier for salespad
     */
    soid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LotSplit>>> {

    const rb = new RequestBuilder(this.rootUrl, LotSplitSalePadService.GetLotSplitbySoIdPath, 'get');
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
        return r as StrictHttpResponse<Array<LotSplit>>;
      })
    );
  }

  /**
   * get the lot split details for specific soid associated.
   *
   * get the lot split details for specific lots of soid
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLotSplitbySoId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLotSplitbySoId(params: {

    /**
     * A unique identifier for salespad
     */
    soid: string;
  },
  context?: HttpContext

): Observable<Array<LotSplit>> {

    return this.getLotSplitbySoId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LotSplit>>) => r.body as Array<LotSplit>)
    );
  }

  /**
   * Path part for operation getLotSplitbyLidSid
   */
  static readonly GetLotSplitbyLidSidPath = '/v1/md/sp/{spadid}/lot/{lotid}/ltsplt/';

  /**
   * get the lot split details for specific lot of a seller.
   *
   * get the lot split details for specific lot of a seller
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLotSplitbyLidSid()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLotSplitbyLidSid$Response(params: {

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

): Observable<StrictHttpResponse<LotSplit>> {

    const rb = new RequestBuilder(this.rootUrl, LotSplitSalePadService.GetLotSplitbyLidSidPath, 'get');
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
        return r as StrictHttpResponse<LotSplit>;
      })
    );
  }

  /**
   * get the lot split details for specific lot of a seller.
   *
   * get the lot split details for specific lot of a seller
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLotSplitbyLidSid$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLotSplitbyLidSid(params: {

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

): Observable<LotSplit> {

    return this.getLotSplitbyLidSid$Response(params,context).pipe(
      map((r: StrictHttpResponse<LotSplit>) => r.body as LotSplit)
    );
  }

  /**
   * Path part for operation createLotSplitBySidLid
   */
  static readonly CreateLotSplitBySidLidPath = '/v1/md/sp/{spadid}/lot/{lotid}/ltsplt/';

  /**
   * create lot split for selected seller and lot id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createLotSplitBySidLid()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createLotSplitBySidLid$Response(params: {

    /**
     * A unique identifier for sales pad
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
     * Creates new Lot split record with unqiue split id for the transcation
     */
    body: LotSplit
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LotSplit>> {

    const rb = new RequestBuilder(this.rootUrl, LotSplitSalePadService.CreateLotSplitBySidLidPath, 'post');
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
        return r as StrictHttpResponse<LotSplit>;
      })
    );
  }

  /**
   * create lot split for selected seller and lot id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createLotSplitBySidLid$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createLotSplitBySidLid(params: {

    /**
     * A unique identifier for sales pad
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
     * Creates new Lot split record with unqiue split id for the transcation
     */
    body: LotSplit
  },
  context?: HttpContext

): Observable<LotSplit> {

    return this.createLotSplitBySidLid$Response(params,context).pipe(
      map((r: StrictHttpResponse<LotSplit>) => r.body as LotSplit)
    );
  }

  /**
   * Path part for operation deleteLotSplit
   */
  static readonly DeleteLotSplitPath = '/v1/md/sp/{spadid}/lot/{lotid}/ltsplt/';

  /**
   * delete lot split by lot id.
   *
   * delete lot split by lot id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLotSplit()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLotSplit$Response(params: {

    /**
     * A unique identifier for sales pad
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
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LotSplitSalePadService.DeleteLotSplitPath, 'delete');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
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
   * delete lot split by lot id.
   *
   * delete lot split by lot id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteLotSplit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLotSplit(params: {

    /**
     * A unique identifier for sales pad
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
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteLotSplit$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateLotSplit
   */
  static readonly UpdateLotSplitPath = '/v1/md/sp/{spadid}/lot/{lotid}/ltsplt/';

  /**
   * update lotsplit sale pad.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLotSplit()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateLotSplit$Response(params: {

    /**
     * A unique identifier for sales pad
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
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: SpPatchRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LotSplit>> {

    const rb = new RequestBuilder(this.rootUrl, LotSplitSalePadService.UpdateLotSplitPath, 'patch');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('lotid', params.lotid, {});
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
        return r as StrictHttpResponse<LotSplit>;
      })
    );
  }

  /**
   * update lotsplit sale pad.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateLotSplit$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateLotSplit(params: {

    /**
     * A unique identifier for sales pad
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
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: SpPatchRequest
  },
  context?: HttpContext

): Observable<LotSplit> {

    return this.updateLotSplit$Response(params,context).pipe(
      map((r: StrictHttpResponse<LotSplit>) => r.body as LotSplit)
    );
  }

}
