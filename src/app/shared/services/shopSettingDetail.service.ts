import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShopmanagerService } from 'src/app/shopmanager/shopmanager.service';
import { MDShopSetting } from 'src/gen/shopmanager/model/mDShopSetting';
import { CHARGESSETTINGS, PRINTSETTING } from '../kb-common.constants';

@Injectable({
    providedIn: 'root',
})
export class ShopSettingDetailService {
    private readonly shopmanagerPrintSettings: BehaviorSubject<MDShopSetting[]> = new BehaviorSubject([]);
    private readonly shopmanagerchargeSettings: BehaviorSubject<MDShopSetting[]> = new BehaviorSubject([]);
    constructor(private readonly shopmanagerService: ShopmanagerService) {
        this.loadShopMangerPrintSettings();
        this.loadShopMangerChargeSettings()
    }

    loadShopMangerPrintSettings() {
        this.shopmanagerService.getShopSettings(PRINTSETTING).subscribe({
            next: (response) => {
                this.shopmanagerPrintSettings.next(response);
            },
            error: (error) => {
                console.log('Error fetching print setting ', error);
            },
        });
    }

    getShopMangerPrintSettings(): Observable<MDShopSetting[]> {
        return this.shopmanagerPrintSettings.asObservable();
    }

    loadShopMangerChargeSettings() {
        this.shopmanagerService.getShopSettings(CHARGESSETTINGS).subscribe({
            next: (response) => {
                this.shopmanagerchargeSettings.next(response);
            },
            error: (error) => {
                console.log('Error fetching charge setting ', error);
            },
        });
    }

    getShopMangerChargeSettings(): Observable<MDShopSetting[]> {
        return this.shopmanagerchargeSettings.asObservable();
    }
}
