import { Injectable } from '@angular/core';
import { KbJournalService } from './kb-journal.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { TransactionCategory } from 'src/gen/jrnl/transactionCategory';
import { PaymentMode } from 'src/gen/jrnl/paymentMode';
/**
 * Service for managing and retrieving journal details such as transaction categories and payment modes.
 */
@Injectable({
    providedIn: 'root',
})
export class KbJournalDetailService {
    private readonly transactionCategory: BehaviorSubject<
        TransactionCategory[]
    > = new BehaviorSubject([]);
    private readonly paymentMode: BehaviorSubject<PaymentMode[]> =
        new BehaviorSubject([]);

    constructor(private readonly kbJournalService: KbJournalService) {
        this.loadsTransactioncategory();
        this.loadPaymentMode();
    }
     /**
     * Loads the transaction categories from the KbJournalService and updates the BehaviorSubject.
     */
    loadsTransactioncategory() {
        this.kbJournalService.getTransactionCategory().subscribe({
            next: (response) => {
                this.transactionCategory.next(response);
            },
            error: (error) => {
                console.error('Error loading transaction category:', error);
            },
        });
    }
     /**
     * Returns an observable of the transaction categories.
     * @returns An Observable that emits the current list of transaction categories.
     */

    getTransactionCategory(): Observable<TransactionCategory[]> {
        return this.transactionCategory.asObservable();
    }
     /**
     * Loads the payment modes from the KbJournalService and updates the BehaviorSubject.
     */
    loadPaymentMode() {
        this.kbJournalService.getPaymentMode().subscribe({
            next: (response) => {
                this.paymentMode.next(response);
            },
            error: (error) => {
                console.log('Error loading Payment mode', error);
            },
        });
    }
     /**
     * Returns an observable of the payment modes.
     * @returns An Observable that emits the current list of payment modes.
     */
    getPaymentMode(): Observable<PaymentMode[]> {
      return this.paymentMode.asObservable();
    }
}
