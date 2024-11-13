import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base/base-http.service';
import {
    HandleError,
    HttpErrorHandler,
} from '../base/http-error-handler.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { KBSessionService } from './kb-session.service';
import { Observable } from 'rxjs';
import { TransactionCategory } from 'src/gen/jrnl/transactionCategory';
import { Voucher } from 'src/gen/jrnl/voucher';
import { VoucherSearchRequest } from 'src/gen/jrnl/voucherSearchRequest';
import { JRNLPatchDocument } from 'src/gen/jrnl/jRNLPatchDocument';
import { DayBookSummary } from 'src/gen/jrnl/dayBookSummary';
import { UpsertInfo } from 'src/gen/so/models';
import { JRNLPatchRequest, PaymentMode, Receipt, ReceiptSearchRequest } from 'src/gen/jrnl/models';
import { ReceiptReferenceResponse } from 'src/gen/jrnl/receiptReferenceResponse';
import { VoucherReferenceResponse } from 'src/gen/jrnl/voucherReferenceResponse';
import { JRNLMultiplePatchRequest } from 'src/gen/jrnl/jRNLMultiplePatchRequest';

@Injectable({
    providedIn: 'root',
})
export class KbJournalService extends BaseHttpService {
    private readonly handleError: HandleError;
    protected readonly journalUrl = environment.apiURL;

    constructor(
        http: HttpClient,
        httpErrorHandler: HttpErrorHandler,
        kbSessionService: KBSessionService
    ) {
        super(http, kbSessionService);
        this.handleError = httpErrorHandler.createHandleError('JournalService');
    }

    getTransactionCategory(): Observable<TransactionCategory[]> {
        const url = `${this.journalUrl}/v1/md/jrnl/txnctg/`;
        return this.readAll(
            url,
            'get all  transactionCategory failed',
            this.handleError
        );
    }

    createVoucherBySoid(params, voucherRequestBody: Voucher): Observable<Voucher> {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(
            this.getActiveTenant()
        )}/voucher/`;
        return this.createWithParam(
            url,
            'creation of  voucher failed',
            this.handleError,
            voucherRequestBody,
            params
        );
    }

    getVoucherByCriteria(
        voucherSearchRequest: VoucherSearchRequest
    ): Observable<Voucher[]> {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(
            this.getActiveTenant()
        )}/voucher/search/`;
        return this.create(
            url,
            'get all voucher failed',
            this.handleError,
            voucherSearchRequest
        );
    }

    getVoucherBasedOnvoucherId(vouvherId: number): Observable<Voucher> {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(
            this.getActiveTenant()
        )}/voucher/${encodeURIComponent(vouvherId)}/`;
        return this.read(
            url,
            'getting voucher based on voucherId ',
            this.handleError,
            undefined
        );
    }

    updateVoucher(
        voucherPatch: JRNLPatchDocument[],
        voucherId: number
    ): Observable<Voucher> {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(
            this.getActiveTenant()
        )}/voucher/${encodeURIComponent(voucherId)}/`;
        return this.patch(
            url,
            'Updated the voucher failed',
            this.handleError,
            voucherPatch
        );
    }

    getDayBook(): Observable<DayBookSummary> {
        const url = `${this.journalUrl
            }/v1/md/jrnl/${this.getActiveTenant()}/daybook/`;
        return this.read(
            url,
            'get daybook failed',
            this.handleError,
            undefined
        );
    }

    createDayBook(upsertInfo: UpsertInfo): Observable<DayBookSummary> {
        const url = `${this.journalUrl
            }/v1/md/jrnl/${this.getActiveTenant()}/daybook/`;
        return this.create(
            url,
            'get daybook failed',
            this.handleError,
            upsertInfo
        );
    }

    createReceipt(params, receipt: Receipt): Observable<Receipt> {
        let queryparams = new HttpParams();
        if (params) {
            const dayBookId = params.dayBookId;
            if (dayBookId) {
                queryparams = queryparams.set('value', dayBookId);
            }
        }
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(
            this.getActiveTenant()
        )}/receipt/`;
        return this.createWithParam(
            url,
            'creation of receipt failed',
            this.handleError,
            receipt,
            params
        );
    }

    getAllReceiptOnTenantId(receiptSearchRequest: ReceiptSearchRequest): Observable<Receipt[]> {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(this.getActiveTenant())}/receipt/search/`;
        return this.create(url, 'Failed to fetch receipts for the tenant', this.handleError, receiptSearchRequest);
    }

    updateVoucherStatus(jrnlPatchDocument: JRNLPatchRequest, voucherId): Observable<Voucher> {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(this.getActiveTenant())}/voucher/${encodeURIComponent(voucherId)}/`;
        return this.patch(
            url,
            'Updated the voucher status to listed',
            this.handleError,
            jrnlPatchDocument
        );
    }

    updateReceiptStatus(receiptId: number, jRNLPatchRequest: JRNLPatchRequest) {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(this.getActiveTenant())}/receipt/${encodeURIComponent(receiptId)}/`;
        return this.patch(url, "Failed to update Receipt status", this.handleError, jRNLPatchRequest)
    }

    updateListOfReceipt(patchRequests: JRNLMultiplePatchRequest[]) {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(this.getActiveTenant())}/receipts/`;
        return this.patchWithoutUpsert(url, "Failed to update Receipt status", this.handleError, patchRequests)
    }

    updateListOfVoucher(patchRequests: JRNLMultiplePatchRequest[]) {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(this.getActiveTenant())}/vouchers/`;
        return this.patchWithoutUpsert(url, "Failed to update Receipt status", this.handleError, patchRequests)
    }


    getReceiptsBasedOnCriteria(receiptsSearchRequest: any): Observable<Receipt[]> {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(this.getActiveTenant())}/receipt/search/`;
        return this.create(
            url,
            'Get receipts based on entered criteria',
            this.handleError,
            receiptsSearchRequest
        );
    }

    getAllVoucher(arrayOfReferenceIds): Observable<VoucherReferenceResponse[]> {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(this.getActiveTenant())}/voucher/voucherreferencesearch/`;
        return this.create(url, 'get all voucher failed', this.handleError, arrayOfReferenceIds)
    }

    getReceiptsBasedOnReferenceIds(referenceIds: string[]): Observable<ReceiptReferenceResponse[]> {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(this.getActiveTenant())}/receipt/referenceSearch/`;
        return this.create(
            url,
            'Get receipts based on entered criteria',
            this.handleError,
            referenceIds
        );
    }

    getVouchersBasedOnReferenceIds(referenceIds: string[]): Observable<VoucherReferenceResponse[]> {
        const url = `${this.journalUrl}/v1/md/jrnl/${encodeURIComponent(this.getActiveTenant())}/voucher/voucherreferencesearch/`;
        return this.create(
            url,
            'Get receipts based on entered criteria',
            this.handleError,
            referenceIds
        );
    }

    getPaymentMode(): Observable<PaymentMode[]> {
        const url = `${this.journalUrl}/v1/md/jrnl/paymentmode/`;
        return this.readAll(url, 'get all payment mode ', this.handleError);
    }


}
