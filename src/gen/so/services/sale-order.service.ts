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
import { PostSaleOrderResponse } from '../models/post-sale-order-response';
import { SaleOrder } from '../models/sale-order';
import { SaleOrderResponse } from '../models/sale-order-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SaleOrderService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllSaleOrder
   */


  static readonly GetAllSaleOrderPath = '/v1/md/so/tenant/55331f7a-5b55-4a1c-8036-37218e014aad/';

  /**
   * get all sale order.
   *
   * request to send all sale orders
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllSaleOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSaleOrder$Response(params?: {

    /**
     * number of saleorder in the response will be equal to or less than value provided for count.
     */
    count?: number;

    /**
     * Name of attribute to be used to filter sales order. If attributeName is given then relavant attributeValue should also be given else attributeName is ignored for filtering.
     */
    attrName?: 'Home' | 'Vehicle' | 'Seller' | 'Location' | 'Lot' | 'PackageType' | 'CommodityType' | 'CommoditySubType';

    /**
     * value of attribute name to be used to filter saleorder. If attributeValue is empty then attributeName is ignored for filtering.
     */
    attrValue?: string;

    /**
     * attribute name on which sorting has to be performed.
     */
    sortBy?: 'createdOn';

    /**
     * type of sorting - ascending or descending
     */
    sortType?: 'ascending' | 'descending';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SaleOrderResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, SaleOrderService.GetAllSaleOrderPath, 'get');
    if (params) {
      rb.query('count', params.count, {});
      rb.query('attrName', params.attrName, {});
      rb.query('attrValue', params.attrValue, {});
      rb.query('sortBy', params.sortBy, {});
      rb.query('sortType', params.sortType, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SaleOrderResponse>>;
      })
    );
  }

  /**
   * get all sale order.
   *
   * request to send all sale orders
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllSaleOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSaleOrder(params?: {

    /**
     * number of saleorder in the response will be equal to or less than value provided for count.
     */
    count?: number;

    /**
     * Name of attribute to be used to filter sales order. If attributeName is given then relavant attributeValue should also be given else attributeName is ignored for filtering.
     */
    attrName?: 'Home' | 'Vehicle' | 'Seller' | 'Location' | 'Lot' | 'PackageType' | 'CommodityType' | 'CommoditySubType';

    /**
     * value of attribute name to be used to filter saleorder. If attributeValue is empty then attributeName is ignored for filtering.
     */
    attrValue?: string;

    /**
     * attribute name on which sorting has to be performed.
     */
    sortBy?: 'createdOn';

    /**
     * type of sorting - ascending or descending
     */
    sortType?: 'ascending' | 'descending';
  },
  context?: HttpContext

): Observable<Array<SaleOrderResponse>> {

    return this.getAllSaleOrder$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SaleOrderResponse>>) => r.body as Array<SaleOrderResponse>)
    );
  }

  /**
   * Path part for operation createSaleOrder
   */
  static readonly CreateSaleOrderPath = '/v1/md/so/';

  /**
   * create a sale order.
   *
   * create a sale order with given details
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSaleOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  createSaleOrder$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PostSaleOrderResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SaleOrderService.CreateSaleOrderPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostSaleOrderResponse>;
      })
    );
  }

  /**
   * create a sale order.
   *
   * create a sale order with given details
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createSaleOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createSaleOrder(params?: {
  },
  context?: HttpContext

): Observable<PostSaleOrderResponse> {

    return this.createSaleOrder$Response(params,context).pipe(
      map((r: StrictHttpResponse<PostSaleOrderResponse>) => r.body as PostSaleOrderResponse)
    );
  }

  /**
   * Path part for operation getSaleOrdersBySellerIds
   */
  static readonly GetSaleOrdersBySellerIdsPath = '/v1/md/so/slr/';

  /**
   * get Saleorders by Seller Ids.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSaleOrdersBySellerIds()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSaleOrdersBySellerIds$Response(params: {
    body: Array<string>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SaleOrderResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, SaleOrderService.GetSaleOrdersBySellerIdsPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SaleOrderResponse>>;
      })
    );
  }

  /**
   * get Saleorders by Seller Ids.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSaleOrdersBySellerIds$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSaleOrdersBySellerIds(params: {
    body: Array<string>
  },
  context?: HttpContext

): Observable<Array<SaleOrderResponse>> {

    return this.getSaleOrdersBySellerIds$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SaleOrderResponse>>) => r.body as Array<SaleOrderResponse>)
    );
  }

  /**
   * Path part for operation getLotsOfSaleOrder
   */
  static readonly GetLotsOfSaleOrderPath = '/v1/md/so/{soid}/lot/';

  /**
   * get lot details of a sale order.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLotsOfSaleOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLotsOfSaleOrder$Response(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Lot>>> {

    const rb = new RequestBuilder(this.rootUrl, SaleOrderService.GetLotsOfSaleOrderPath, 'get');
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
        return r as StrictHttpResponse<Array<Lot>>;
      })
    );
  }

  /**
   * get lot details of a sale order.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLotsOfSaleOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLotsOfSaleOrder(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;
  },
  context?: HttpContext

): Observable<Array<Lot>> {

    return this.getLotsOfSaleOrder$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Lot>>) => r.body as Array<Lot>)
    );
  }

  /**
   * Path part for operation getLotbyLotId
   */
  static readonly GetLotbyLotIdPath = '/v1/md/so/{soid}/lot/{lid}/';

  /**
   * get single lot details by lot id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLotbyLotId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLotbyLotId$Response(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of lot id
     */
    lid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Lot>> {

    const rb = new RequestBuilder(this.rootUrl, SaleOrderService.GetLotbyLotIdPath, 'get');
    if (params) {
      rb.path('soid', params.soid, {});
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
   * get single lot details by lot id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLotbyLotId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLotbyLotId(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;

    /**
     * A unique identifier of lot id
     */
    lid: number;
  },
  context?: HttpContext

): Observable<Lot> {

    return this.getLotbyLotId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Lot>) => r.body as Lot)
    );
  }

  /**
   * Path part for operation getSaleOrder
   */
  static readonly GetSaleOrderPath = '/v1/md/so/{soid}/';

  /**
   * get details of a sale order.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSaleOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSaleOrder$Response(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SaleOrder>> {

    const rb = new RequestBuilder(this.rootUrl, SaleOrderService.GetSaleOrderPath, 'get');
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
        return r as StrictHttpResponse<SaleOrder>;
      })
    );
  }

  /**
   * get details of a sale order.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSaleOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSaleOrder(params: {

    /**
     * A unique identifier for the SaleOrder
     */
    soid: string;
  },
  context?: HttpContext

): Observable<SaleOrder> {

    return this.getSaleOrder$Response(params,context).pipe(
      map((r: StrictHttpResponse<SaleOrder>) => r.body as SaleOrder)
    );
  }

  /**
   * Path part for operation deleteSaleOrder
   */
  static readonly DeleteSaleOrderPath = '/v1/md/so/tenant/55331f7a-5b55-4a1c-8036-37218e014aad/so/{soid}/';

  /**
   * delete a sale order.
   *
   * Deletes a sale order and all contained resources.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSaleOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSaleOrder$Response(params: {

    /**
     * A unique identifier for the project
     */
    soid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SaleOrderService.DeleteSaleOrderPath, 'delete');
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
   * delete a sale order.
   *
   * Deletes a sale order and all contained resources.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSaleOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSaleOrder(params: {

    /**
     * A unique identifier for the project
     */
    soid: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteSaleOrder$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
