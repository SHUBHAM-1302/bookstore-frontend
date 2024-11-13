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

import { Lot } from '../models/lot';
import { PatchRequest } from '../models/patch-request';
import { Seller } from '../models/seller';
import { SellerResponse } from '../models/seller-response';
import { SellerSoResponse } from '../models/seller-so-response';

@Injectable({
  providedIn: 'root',
})
export class SellerCmdSaleOrderService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllSeller
   */
  static readonly GetAllSellerPath = '/v1/md/so/{soid}/cmd/slr/';

  /**
   * get all seller for the sale order id.
   *
   * get all seller details based on sale order id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllSeller()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSeller$Response(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SellerSoResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, SellerCmdSaleOrderService.GetAllSellerPath, 'get');
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
        return r as StrictHttpResponse<Array<SellerSoResponse>>;
      })
    );
  }

  /**
   * get all seller for the sale order id.
   *
   * get all seller details based on sale order id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllSeller$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSeller(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;
  },
  context?: HttpContext

): Observable<Array<SellerSoResponse>> {

    return this.getAllSeller$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SellerSoResponse>>) => r.body as Array<SellerSoResponse>)
    );
  }

  /**
   * Path part for operation createSellerForSo
   */
  static readonly CreateSellerForSoPath = '/v1/md/so/{soid}/cmd/slr/';

  /**
   * create a seller based on sale order id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSellerForSo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSellerForSo$Response(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;

    /**
     * Creates a seller record with unqiue id
     */
    body: Seller
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SellerResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SellerCmdSaleOrderService.CreateSellerForSoPath, 'post');
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
        return r as StrictHttpResponse<SellerResponse>;
      })
    );
  }

  /**
   * create a seller based on sale order id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createSellerForSo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSellerForSo(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;

    /**
     * Creates a seller record with unqiue id
     */
    body: Seller
  },
  context?: HttpContext

): Observable<SellerResponse> {

    return this.createSellerForSo$Response(params,context).pipe(
      map((r: StrictHttpResponse<SellerResponse>) => r.body as SellerResponse)
    );
  }

  /**
   * Path part for operation deleteSellerbyId
   */
  static readonly DeleteSellerbyIdPath = '/v1/md/so/{soid}/cmd/slr/{slrid}/';

  /**
   * delete a seller based on sale order and seller id.
   *
   * delete a seller based on sale order and seller id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSellerbyId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSellerbyId$Response(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellerCmdSaleOrderService.DeleteSellerbyIdPath, 'delete');
    if (params) {
      rb.path('soid', params.soid, {});
      rb.path('slrid', params.slrid, {});
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
   * delete a seller based on sale order and seller id.
   *
   * delete a seller based on sale order and seller id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSellerbyId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSellerbyId(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteSellerbyId$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateSellerDetails
   */
  static readonly UpdateSellerDetailsPath = '/v1/md/so/{soid}/cmd/slr/{slrid}/';

  /**
   * update seller details.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSellerDetails()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateSellerDetails$Response(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: PatchRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Seller>> {

    const rb = new RequestBuilder(this.rootUrl, SellerCmdSaleOrderService.UpdateSellerDetailsPath, 'patch');
    if (params) {
      rb.path('soid', params.soid, {});
      rb.path('slrid', params.slrid, {});
      rb.body(params.body, 'application/json-patch+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Seller>;
      })
    );
  }

  /**
   * update seller details.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSellerDetails$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateSellerDetails(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: PatchRequest
  },
  context?: HttpContext

): Observable<Seller> {

    return this.updateSellerDetails$Response(params,context).pipe(
      map((r: StrictHttpResponse<Seller>) => r.body as Seller)
    );
  }

  /**
   * Path part for operation getAlllotForSellerIdSaleOrderId
   */
  static readonly GetAlllotForSellerIdSaleOrderIdPath = '/v1/md/so/{soid}/cmd/slr/{slrid}/lot';

  /**
   * get all lot deatils for sale order and seller id.
   *
   * get all lot deatils based on sale order id and seller id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAlllotForSellerIdSaleOrderId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlllotForSellerIdSaleOrderId$Response(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SellerResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SellerCmdSaleOrderService.GetAlllotForSellerIdSaleOrderIdPath, 'get');
    if (params) {
      rb.path('soid', params.soid, {});
      rb.path('slrid', params.slrid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SellerResponse>;
      })
    );
  }

  /**
   * get all lot deatils for sale order and seller id.
   *
   * get all lot deatils based on sale order id and seller id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAlllotForSellerIdSaleOrderId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlllotForSellerIdSaleOrderId(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;
  },
  context?: HttpContext

): Observable<SellerResponse> {

    return this.getAlllotForSellerIdSaleOrderId$Response(params,context).pipe(
      map((r: StrictHttpResponse<SellerResponse>) => r.body as SellerResponse)
    );
  }

  /**
   * Path part for operation createSellerLotForSoid
   */
  static readonly CreateSellerLotForSoidPath = '/v1/md/so/{soid}/cmd/slr/{slrid}/lot';

  /**
   * create lot for seller based on sale order id and seller id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSellerLotForSoid()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSellerLotForSoid$Response(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;

    /**
     * Creates a seller record with unqiue id
     */
    body: Lot
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Lot>> {

    const rb = new RequestBuilder(this.rootUrl, SellerCmdSaleOrderService.CreateSellerLotForSoidPath, 'post');
    if (params) {
      rb.path('soid', params.soid, {});
      rb.path('slrid', params.slrid, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Lot>;
      })
    );
  }

  /**
   * create lot for seller based on sale order id and seller id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createSellerLotForSoid$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSellerLotForSoid(params: {

    /**
     * A unique identifier for sale order
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;

    /**
     * Creates a seller record with unqiue id
     */
    body: Lot
  },
  context?: HttpContext

): Observable<Lot> {

    return this.createSellerLotForSoid$Response(params,context).pipe(
      map((r: StrictHttpResponse<Lot>) => r.body as Lot)
    );
  }

  /**
   * Path part for operation getlotForLotId
   */
  static readonly GetlotForLotIdPath = '/v1/md/so/{soid}/cmd/slr/{slrid}/lot/{lid}';

  /**
   * get lot deatils for sale order and seller id.
   *
   * get lot deatils based on sale order id and seller id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getlotForLotId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getlotForLotId$Response(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;

    /**
     * A unique identifier of lot id
     */
    lid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Lot>> {

    const rb = new RequestBuilder(this.rootUrl, SellerCmdSaleOrderService.GetlotForLotIdPath, 'get');
    if (params) {
      rb.path('soid', params.soid, {});
      rb.path('slrid', params.slrid, {});
      rb.path('lid', params.lid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Lot>;
      })
    );
  }

  /**
   * get lot deatils for sale order and seller id.
   *
   * get lot deatils based on sale order id and seller id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getlotForLotId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getlotForLotId(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;

    /**
     * A unique identifier of lot id
     */
    lid: number;
  },
  context?: HttpContext

): Observable<Lot> {

    return this.getlotForLotId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Lot>) => r.body as Lot)
    );
  }

  /**
   * Path part for operation deletelotForLotId
   */
  static readonly DeletelotForLotIdPath = '/v1/md/so/{soid}/cmd/slr/{slrid}/lot/{lid}';

  /**
   * delete a lot based on sale order, seller id, lot id.
   *
   * delete a lot based on sale order, seller id, lot id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletelotForLotId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletelotForLotId$Response(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;

    /**
     * A unique identifier of lot id
     */
    lid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellerCmdSaleOrderService.DeletelotForLotIdPath, 'delete');
    if (params) {
      rb.path('soid', params.soid, {});
      rb.path('slrid', params.slrid, {});
      rb.path('lid', params.lid, {});
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
   * delete a lot based on sale order, seller id, lot id.
   *
   * delete a lot based on sale order, seller id, lot id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletelotForLotId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletelotForLotId(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;

    /**
     * A unique identifier of lot id
     */
    lid: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletelotForLotId$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateLotDetails
   */
  static readonly UpdateLotDetailsPath = '/v1/md/so/{soid}/cmd/slr/{slrid}/lot/{lid}';

  /**
   * update seller lot details.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLotDetails()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateLotDetails$Response(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;

    /**
     * A unique identifier of lot id
     */
    lid: number;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: PatchRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Lot>> {

    const rb = new RequestBuilder(this.rootUrl, SellerCmdSaleOrderService.UpdateLotDetailsPath, 'patch');
    if (params) {
      rb.path('soid', params.soid, {});
      rb.path('slrid', params.slrid, {});
      rb.path('lid', params.lid, {});
      rb.body(params.body, 'application/json-patch+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Lot>;
      })
    );
  }

  /**
   * update seller lot details.
   *
   * Carries out patch operation and returns updated object
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateLotDetails$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateLotDetails(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of sale id
     */
    slrid: number;

    /**
     * A unique identifier of lot id
     */
    lid: number;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: PatchRequest
  },
  context?: HttpContext

): Observable<Lot> {

    return this.updateLotDetails$Response(params,context).pipe(
      map((r: StrictHttpResponse<Lot>) => r.body as Lot)
    );
  }

}
