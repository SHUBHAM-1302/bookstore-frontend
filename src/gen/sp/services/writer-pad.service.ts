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
import { BuyerWeighingInfoOutput } from '../models/buyer-weighing-info-output';
import { SpPatchDocument } from '../models/sp-patch-document';
import { WeighingInfo } from '../models/weighing-info';
import { WeighingInfoPatchRequest } from '../models/weighing-info-patch-request';
import { WriterDaySheetItem } from '../models/writer-day-sheet-item';

@Injectable({
  providedIn: 'root',
})
export class WriterPadService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getWeighinglogsforWriter
   */
  static readonly GetWeighinglogsforWriterPath = '/v1/md/sp/wp/writer/{wrid}/logs/';

  /**
   * get weighing logs for writer.
   *
   * get weighing logs for writer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeighinglogsforWriter()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeighinglogsforWriter$Response(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<BuyerWeighingInfoOutput>>> {

    const rb = new RequestBuilder(this.rootUrl, WriterPadService.GetWeighinglogsforWriterPath, 'get');
    if (params) {
      rb.path('wrid', params.wrid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BuyerWeighingInfoOutput>>;
      })
    );
  }

  /**
   * get weighing logs for writer.
   *
   * get weighing logs for writer
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeighinglogsforWriter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeighinglogsforWriter(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;
  },
  context?: HttpContext

): Observable<Array<BuyerWeighingInfoOutput>> {

    return this.getWeighinglogsforWriter$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<BuyerWeighingInfoOutput>>) => r.body as Array<BuyerWeighingInfoOutput>)
    );
  }

  /**
   * Path part for operation getBidDetailsforspId
   */
  static readonly GetBidDetailsforspIdPath = '/v1/md/sp/{spadid}/wp/writer/{wrid}/{spid}/';

  /**
   * get bid details based on spID.
   *
   * get bid details based on spID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBidDetailsforspId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBidDetailsforspId$Response(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * sp id created during the bid creation
     */
    spid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<BuyerLotBid>>> {

    const rb = new RequestBuilder(this.rootUrl, WriterPadService.GetBidDetailsforspIdPath, 'get');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('wrid', params.wrid, {});
      rb.path('spid', params.spid, {});
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
   * get bid details based on spID.
   *
   * get bid details based on spID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBidDetailsforspId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBidDetailsforspId(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * sp id created during the bid creation
     */
    spid: string;
  },
  context?: HttpContext

): Observable<Array<BuyerLotBid>> {

    return this.getBidDetailsforspId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<BuyerLotBid>>) => r.body as Array<BuyerLotBid>)
    );
  }

  /**
   * Path part for operation createWeighingInfo
   */
  static readonly CreateWeighingInfoPath = '/v1/md/sp/wp/writer/{wrid}/weigh/';

  /**
   * creates the weighing data obtained from weighing scale.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createWeighingInfo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createWeighingInfo$Response(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Creates new weighing info record with unqiue weighhing id for the transcation
     */
    body: WeighingInfo
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WeighingInfo>> {

    const rb = new RequestBuilder(this.rootUrl, WriterPadService.CreateWeighingInfoPath, 'post');
    if (params) {
      rb.path('wrid', params.wrid, {});
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
        return r as StrictHttpResponse<WeighingInfo>;
      })
    );
  }

  /**
   * creates the weighing data obtained from weighing scale.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createWeighingInfo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createWeighingInfo(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Creates new weighing info record with unqiue weighhing id for the transcation
     */
    body: WeighingInfo
  },
  context?: HttpContext

): Observable<WeighingInfo> {

    return this.createWeighingInfo$Response(params,context).pipe(
      map((r: StrictHttpResponse<WeighingInfo>) => r.body as WeighingInfo)
    );
  }

  /**
   * Path part for operation deleteWeighingDataforSeq
   */
  static readonly DeleteWeighingDataforSeqPath = '/v1/md/sp/{spadid}/wp/writer/{wrid}/{spid}/weigh/';

  /**
   * delete weighing data for spId based on weighing seq.
   *
   * delete weighing data for spId based on weighing seq
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteWeighingDataforSeq()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWeighingDataforSeq$Response(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * sp id created during the bid creation
     */
    spid: string;

    /**
     * Weighing sequence of the spId
     */
    weighSeq?: number;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WriterPadService.DeleteWeighingDataforSeqPath, 'delete');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('wrid', params.wrid, {});
      rb.path('spid', params.spid, {});
      rb.query('weighSeq', params.weighSeq, {});
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
   * delete weighing data for spId based on weighing seq.
   *
   * delete weighing data for spId based on weighing seq
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteWeighingDataforSeq$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWeighingDataforSeq(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * sp id created during the bid creation
     */
    spid: string;

    /**
     * Weighing sequence of the spId
     */
    weighSeq?: number;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteWeighingDataforSeq$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateWeighingInfo
   */
  static readonly UpdateWeighingInfoPath = '/v1/md/sp/{spadid}/wp/writer/{wrid}/{spid}/weigh/';

  /**
   * update the weighingInfo.
   *
   * updates the weighing info for transfer or correction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateWeighingInfo()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateWeighingInfo$Response(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * sp id created during the bid creation
     */
    spid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: WeighingInfoPatchRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WeighingInfo>>> {

    const rb = new RequestBuilder(this.rootUrl, WriterPadService.UpdateWeighingInfoPath, 'patch');
    if (params) {
      rb.path('spadid', params.spadid, {});
      rb.path('wrid', params.wrid, {});
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
        return r as StrictHttpResponse<Array<WeighingInfo>>;
      })
    );
  }

  /**
   * update the weighingInfo.
   *
   * updates the weighing info for transfer or correction
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateWeighingInfo$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateWeighingInfo(params: {

    /**
     * A unique identifier for sales pad
     */
    spadid: string;

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * sp id created during the bid creation
     */
    spid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;

    /**
     * Valid operation is UPDATE. property should contain name of the VO attribute that needs to be updated. value should contain the new value.
     */
    body: WeighingInfoPatchRequest
  },
  context?: HttpContext

): Observable<Array<WeighingInfo>> {

    return this.updateWeighingInfo$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WeighingInfo>>) => r.body as Array<WeighingInfo>)
    );
  }

  /**
   * Path part for operation getWriterSheetforSpadId
   */
  static readonly GetWriterSheetforSpadIdPath = '/v1/md/sp/wp/writer/{wrid}/sheet/';

  /**
   * get writer day sheet with sequence of spid maintained.
   *
   * get weighing datas for the writer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWriterSheetforSpadId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWriterSheetforSpadId$Response(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WriterDaySheetItem>>> {

    const rb = new RequestBuilder(this.rootUrl, WriterPadService.GetWriterSheetforSpadIdPath, 'get');
    if (params) {
      rb.path('wrid', params.wrid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WriterDaySheetItem>>;
      })
    );
  }

  /**
   * get writer day sheet with sequence of spid maintained.
   *
   * get weighing datas for the writer
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWriterSheetforSpadId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWriterSheetforSpadId(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;
  },
  context?: HttpContext

): Observable<Array<WriterDaySheetItem>> {

    return this.getWriterSheetforSpadId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WriterDaySheetItem>>) => r.body as Array<WriterDaySheetItem>)
    );
  }

  /**
   * Path part for operation createWriterSheetItem
   */
  static readonly CreateWriterSheetItemPath = '/v1/md/sp/wp/writer/{wrid}/sheet/';

  /**
   * creates the writer specific spid sequence.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createWriterSheetItem()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createWriterSheetItem$Response(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
    body: WriterDaySheetItem
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WriterDaySheetItem>> {

    const rb = new RequestBuilder(this.rootUrl, WriterPadService.CreateWriterSheetItemPath, 'post');
    if (params) {
      rb.path('wrid', params.wrid, {});
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
        return r as StrictHttpResponse<WriterDaySheetItem>;
      })
    );
  }

  /**
   * creates the writer specific spid sequence.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createWriterSheetItem$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createWriterSheetItem(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
    body: WriterDaySheetItem
  },
  context?: HttpContext

): Observable<WriterDaySheetItem> {

    return this.createWriterSheetItem$Response(params,context).pipe(
      map((r: StrictHttpResponse<WriterDaySheetItem>) => r.body as WriterDaySheetItem)
    );
  }

  /**
   * Path part for operation deleteWriterSheetItem
   */
  static readonly DeleteWriterSheetItemPath = '/v1/md/sp/wp/writer/{wrid}/sheet/';

  /**
   * delete the worksheet items related to wrId.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteWriterSheetItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWriterSheetItem$Response(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WriterPadService.DeleteWriterSheetItemPath, 'delete');
    if (params) {
      rb.path('wrid', params.wrid, {});
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
   * delete the worksheet items related to wrId.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteWriterSheetItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWriterSheetItem(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteWriterSheetItem$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateWriterPadSheet
   */
  static readonly UpdateWriterPadSheetPath = '/v1/md/sp/wp/writer/{wrid}/sheet/';

  /**
   * update writer pad sheet.
   *
   * updates the writer pad on account of transfers or takeovers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateWriterPadSheet()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateWriterPadSheet$Response(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;

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

): Observable<StrictHttpResponse<Array<WriterDaySheetItem>>> {

    const rb = new RequestBuilder(this.rootUrl, WriterPadService.UpdateWriterPadSheetPath, 'patch');
    if (params) {
      rb.path('wrid', params.wrid, {});
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
        return r as StrictHttpResponse<Array<WriterDaySheetItem>>;
      })
    );
  }

  /**
   * update writer pad sheet.
   *
   * updates the writer pad on account of transfers or takeovers
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateWriterPadSheet$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  updateWriterPadSheet(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;

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

): Observable<Array<WriterDaySheetItem>> {

    return this.updateWriterPadSheet$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WriterDaySheetItem>>) => r.body as Array<WriterDaySheetItem>)
    );
  }

  /**
   * Path part for operation deleteWriterSheetItemByDate
   */
  static readonly DeleteWriterSheetItemByDatePath = '/v1/md/sp/wp/writer/{wrid}/sheet/{sheetdate}/';

  /**
   * delete the worksheet items related to wrId before the given date.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteWriterSheetItemByDate()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWriterSheetItemByDate$Response(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * The date from which the items should be deleted
     */
    sheetdate: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WriterPadService.DeleteWriterSheetItemByDatePath, 'delete');
    if (params) {
      rb.path('wrid', params.wrid, {});
      rb.path('sheetdate', params.sheetdate, {});
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
   * delete the worksheet items related to wrId before the given date.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteWriterSheetItemByDate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWriterSheetItemByDate(params: {

    /**
     * A unique identifier of writer
     */
    wrid: string;

    /**
     * The date from which the items should be deleted
     */
    sheetdate: string;

    /**
     * A unique identifier for user
     */
    userId?: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteWriterSheetItemByDate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
