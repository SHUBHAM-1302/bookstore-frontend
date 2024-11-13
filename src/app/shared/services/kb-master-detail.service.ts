import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
    BrokerageType,
    CommodityType,
    DiscountType,
    FreightType,
    MDDevice,
    MDUser,
    MDUserRole,
    PackageType,
} from 'src/gen/ms/models/models';
import { KBMasterService } from './kb-master.service';
import { All } from 'src/app/shared/kb-common.constants';

/**
 * KbMasterDetailService provides methods to manage and retrieve
 * freight, commodity, and package types through a reactive approach
 * using BehaviorSubjects.
 */
@Injectable({
    providedIn: 'root',
})
export class KbMasterDetailService {
    private readonly freightTypes: BehaviorSubject<FreightType[]> =
        new BehaviorSubject([]);
    private readonly commodityTypes: BehaviorSubject<CommodityType[]> =
        new BehaviorSubject([]);
    private readonly packageTypes: BehaviorSubject<PackageType[]> =
        new BehaviorSubject([]);
    private readonly brokerageTypes: BehaviorSubject<BrokerageType[]> =
        new BehaviorSubject([]);
    private readonly discountTypes: BehaviorSubject<BrokerageType[]> =
        new BehaviorSubject([]);
    private readonly deviceList: BehaviorSubject<MDDevice[]> =
        new BehaviorSubject([]);
    private readonly rolesList: BehaviorSubject<MDUserRole[]> =
        new BehaviorSubject([]);
    private readonly peoplesList: BehaviorSubject<MDUser[]> =
        new BehaviorSubject([]);

    constructor(private readonly kbMasterService: KBMasterService) {
        this.loadFreightTypes();
        this.loadCommodityTypes();
        this.loadPackageType();
        this.loadBrokerageType();
        this.loadDiscountTypes();
        this.loadDeviceList(All);
        this.loadRoles();
        this.loadPeoples();
    }
    /**
     * Loads freight types from the KBMasterService and updates the freightTypes BehaviorSubject.
     * Logs an error if the loading fails.
     */
    loadFreightTypes() {
        this.kbMasterService.getFrieghtTypes().subscribe({
            next: (response) => {
                this.freightTypes.next(response);
            },
            error: (error) => {
                console.error('Error loading freight types:', error);
            },
        });
    }
    /**
     * Returns an observable of the current freight types.
     *
     * @returns Observable<FreightType[]> - An observable that emits the list of freight types.
     */
    getFreightTypes(): Observable<FreightType[]> {
        return this.freightTypes.asObservable();
    }
    /**
     * Loads commodity types from the KBMasterService and updates the commodityTypes BehaviorSubject.
     * Logs an error if the loading fails.
     */

    loadCommodityTypes() {
        this.kbMasterService.getCommodityTypes().subscribe({
            next: (response) => {
                this.commodityTypes.next(response);
            },
            error: (error) => {
                console.error('Error loading commodity types', error);
            },
        });
    }
    /**
     * Returns an observable of the current commodity types.
     *
     * @returns Observable<CommodityType[]> - An observable that emits the list of commodity types.
     */
    getCommodityTypes(): Observable<CommodityType[]> {
        return this.commodityTypes.asObservable();
    }
    /**
     * Loads package types from the KBMasterService and updates the packageTypes BehaviorSubject.
     * Logs an error if the loading fails.
     */
    loadPackageType() {
        this.kbMasterService.getPackageTypes().subscribe({
            next: (response) => {
                this.packageTypes.next(response);
            },
            error: (error) => {
                console.log('Error loading package types', error);
            },
        });
    }

    /**
     * Returns an observable of the current package types.
     *
     * @returns Observable<PackageType[]> - An observable that emits the list of package types.
     */
    getPackageTypes(): Observable<PackageType[]> {
        return this.packageTypes.asObservable();
    }
    /**
    * Loads the brokerage types from the KbMasterService and updates the BehaviorSubject.
    */
    loadBrokerageType() {
        this.kbMasterService.getBrokerageType().subscribe({
            next: (response) => {
                this.brokerageTypes.next(response);
            },
            error: (error) => {
                console.log('Error loading brokerage Types', error);
            },
        });
    }
    /**
     * Returns an observable of the brokerage types.
     * @returns An Observable that emits the current list of brokerage types.
     */

    getBrokerageType(): Observable<BrokerageType[]> {
        return this.brokerageTypes.asObservable();
    }
    /**
     * Loads the discount types from the KbMasterService and updates the BehaviorSubject.
     */

    loadDiscountTypes() {
        this.kbMasterService.getDiscountType().subscribe({
            next: (response) => {
                this.discountTypes.next(response);
            },
            error: (error) => {
                console.log('Error loading discoun types', error);
            },
        });
    }
    /**
    * Returns an observable of the discount types.
    * @returns An Observable that emits the current list of discount types.
    */
    getDiscountType(): Observable<DiscountType[]> {
        return this.discountTypes.asObservable();
    }
    /**
     * Loads the device list from the KbMasterService for the specified device type.
     * @param deviceType - The type of device to load.
     */
    loadDeviceList(deviceType: string) {
        this.kbMasterService.getDeviceList(deviceType).subscribe({
            next: (response: MDDevice[]) => {
                this.deviceList.next(response);
            },
            error: (error) => {
                console.log('Error loading device list', error);
            },
        });
    }
    /**
    * Returns an observable of the device list.
    * @returns An Observable that emits the current list of devices.
    */
    getDeviceList(): Observable<MDDevice[]> {
        return this.deviceList.asObservable();
    }
    /**
    * Loads the user roles from the KbMasterService and updates the BehaviorSubject.
    */
    loadRoles() {
        this.kbMasterService.getRoles().subscribe({
            next: (response) => {
                this.rolesList.next(response);
            },
            error: (error) => {
                console.log('Error loading roles', error);
            },
        });
    }
    /**
   * Returns an observable of the user roles.
   * @returns An Observable that emits the current list of user roles.
   */

    getRoles(): Observable<MDUserRole[]> {
        return this.rolesList.asObservable();
    }
    /**
   * Loads the list of people from the KbMasterService and updates the BehaviorSubject.
   */

    loadPeoples() {
        this.kbMasterService.getPeoples().subscribe({
            next: (response) => {
                this.peoplesList.next(response);
            },
            error: (error) => {
                console.log('Error loading peoples', error);
            },
        });
    }
    /**
    * Returns an observable of the list of people.
    * @returns An Observable that emits the current list of people.
    */
    getPeoples(): Observable<MDUser[]> {
        return this.peoplesList.asObservable();
    }
}
