import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
    HttpErrorHandler,
    HandleError,
} from '../../shared/base/http-error-handler.service';
import { BaseHttpService } from '../../shared/base/base-http.service';
import { FreightType } from 'src/gen/ms/models/freightType';
import { MDUser } from 'src/gen/ms/models/mDUser';
import { CommodityType } from 'src/gen/ms/models/commodityType';
import { PackageType } from 'src/gen/ms/models/packageType';
import { MDUserTenant } from 'src/gen/ms/models/mDUserTenant';
import { MDUserAccesss } from 'src/gen/ms/models/mDUserAccesss';
import { MDDevice } from 'src/gen/ms/models/mDDevice';
import { BrokerageType } from 'src/gen/ms/models/brokerageType';
import {
    DiscountType,
    MDUserRole,
    MasterPatchDocument,
} from 'src/gen/ms/models/models';
import { KBSessionService } from '../../shared/services/kb-session.service';
import { environment } from 'src/environments/environment';
// import { KBNotificationService } from '../notification/kb-notification.service';
import { MDContacts } from 'src/gen/ms/models/mDContacts';
import { POST } from '../kb-common.constants';
import { MasterAddress } from 'src/gen/ms/models/masterAddress';
import { StateName } from 'src/gen/ms/models/stateName';

/**
 * Class provides CURD operations for master service
 */

@Injectable({
    providedIn: 'root',
})
export class KBMasterService extends BaseHttpService {
    //private readonly masterUrl: string;
    private readonly handleError: HandleError;
    protected readonly masterUrl = environment.apiURL + '/v1/md';

    constructor(
        http: HttpClient,
        httpErrorHandler: HttpErrorHandler,
        kbSessionService: KBSessionService
    ) {
        super(http, kbSessionService);
        this.handleError = httpErrorHandler.createHandleError('MasterService');
    }

    getFrieghtTypes(): Observable<FreightType[]> {
        let urlParam = new HttpParams();
        return this.readAll(
            this.masterUrl + '/master/frgtyp/',
            'Get all freight types failed',
            this.handleError,
            urlParam
        );
    }
    getAddressBysearchCriteria(params): Observable<MasterAddress[]> {
        let queryparams = new HttpParams();
        if (params) {
            const statename = params.statename;
            const searchQriteria = params.searchQriteria;
            const resultSize = params.resultSize;
            const district = params.districtname;

            if (statename) {
                queryparams = queryparams.set('statename', statename);
            }
            if (district) {
                queryparams = queryparams.set('districtname', district);
            }
            if (searchQriteria) {
                queryparams = queryparams.set('searchQriteria', searchQriteria);
            }
            if (resultSize) {
                queryparams = queryparams.set('resultSize', resultSize);
            }
        }
        const url = `${this.masterUrl}/master/msaddress/`;
        return this.readAll(
            url,
            'get address failed',
            this.handleError,
            queryparams
        );
    }

    getAllStateNames(params): Observable<StateName[]> {
        let queryparams = new HttpParams();
        if (params) {
            const statename = params.statename;
            if (statename) {
                queryparams = queryparams.set('statename', statename);
            }
        }
        const url = `${this.masterUrl}/master/msaddress/state/`;
        return this.readAll(
            url,
            'get all statename failed',
            this.handleError,
            queryparams
        );
    }

    getMDTenantInfo(userid: string): Observable<MDUserTenant[]> {
        let queryparams = new HttpParams();
        const url = `${this.masterUrl}/master/usr/${encodeURIComponent(
            String(userid)
        )}`;
        queryparams = queryparams.set('enabled', 'true');
        return this.readAll(
            url + '/tenants/',
            'Failed to get tenant details',
            this.handleError,
            queryparams
        );
    }

    getUserPermissionInfo(
        userid: string,
        tenantid: string
    ): Observable<MDUserAccesss[]> {
        let queryparams = new HttpParams();
        const url = `${this.masterUrl}/master/usr/${encodeURIComponent(
            String(userid)
        )}`;
        queryparams = queryparams.set('tenantId', tenantid);
        return this.readAll(
            url + '/permissions/',
            'Get user permissions based on tenant',
            this.handleError,
            queryparams
        );
    }

    createMDUser(mduser: MDUser): Observable<MDUser> {
        let queryparams = new HttpParams();
        queryparams = queryparams.set('roledetails', false);
        return this.create(
            this.masterUrl + '/master/usr/',
            'Create or get user failed',
            this.handleError,
            mduser
        );
    }

    createContact(mdContacts): Observable<MDContacts> {
        const url =
            this.masterUrl +
            `/master/mycontacts/tenant/${encodeURIComponent(
                String(this.getActiveTenant())
            )}/`;
        return this.create(
            url,
            'creation of contact failed',
            this.handleError,
            mdContacts
        );
    }

    getCommodityTypes(): Observable<CommodityType[]> {
        let urlParam = new HttpParams();
        return this.readAll(
            this.masterUrl + '/master/cmdtyp/',
            'Get all Commodity types failed',
            this.handleError,
            urlParam
        );
    }

    getPackageTypes(): Observable<PackageType[]> {
        let urlParam = new HttpParams();
        return this.readAll(
            this.masterUrl + '/master/pkgtype/',
            'Get all Package Types failed',
            this.handleError,
            urlParam
        );
    }
    /**
     * This method is displaying all the device
     * @param deviceType
     * @returns
     */
    getDeviceList(deviceType: string): Observable<MDDevice[]> {
        let queryparams = new HttpParams();
        const url = `${this.masterUrl}/master/${encodeURIComponent(
            String(this.getActiveTenant())
        )}/device/`;

        queryparams = queryparams.set('deviceType', deviceType);
        return this.readAll(
            url,
            'Get all device list failed',
            this.handleError,
            queryparams
        );
    }

    /**
     * This method is populating the paticular device based on deviceId
     * @param deviceId
     * @returns
     */
    getDeviceByDeviceId(deviceId: string): Observable<MDDevice[]> {
        let queryparams = new HttpParams();
        queryparams = queryparams.set('deviceId', deviceId);
        return this.readAll(
            this.masterUrl + '/master/device',
            'Get all device list failed',
            this.handleError,
            queryparams
        );
    }

    /**
     * This method is populating all the user
     * @param operations
     * @param service
     * @returns
     */

    getUserByTenantID(
        operations: string,
        service: string
    ): Observable<MDUser[]> {
        let queryparams = new HttpParams();
        queryparams = queryparams.set('operations', operations);
        queryparams = queryparams.set('service', service);
        const url = `${this.masterUrl}/master/${encodeURIComponent(
            String(this.getActiveTenant())
        )}/roles/usr/`;
        return this.readAll(
            url,
            'Get all user failed',
            this.handleError,
            queryparams
        );
    }
    /**
     * This method is used to update the devicename
     * @param deviceId
     * @param deviceName
     * @param operation
     * @returns
     */

    updateDevice(
        deviceId: string,
        deviceName: string,
        operation: string
    ): Observable<MDDevice> {
        let queryparams = new HttpParams();
        queryparams = queryparams.set('deviceName', deviceName);
        queryparams = queryparams.set('operation', operation);
        const url = `${this.masterUrl}/master/device/${encodeURIComponent(
            String(deviceId)
        )}`;
        return this.put(
            url,
            'Update all the device',
            this.handleError,
            queryparams
        );
    }

    getBrokerageType(): Observable<BrokerageType[]> {
        let urlParam = new HttpParams();
        return this.readAll(
            this.masterUrl + '/master/brktyp/',
            'Fetch All the Brokerge Types',
            this.handleError,
            urlParam
        );
    }

    getDiscountType(): Observable<DiscountType[]> {
        let urlParam = new HttpParams();
        return this.readAll(
            this.masterUrl + '/master/discttyp/',
            'Fetch All the Discount Types',
            this.handleError,
            urlParam
        );
    }

    patchUserByUUID(
        userId: string,
        masterPatchDocument: MasterPatchDocument[]
    ): Observable<MDUser> {
        let queryparams = new HttpParams();
        queryparams = queryparams.set('userId', userId);
        const url = `${this.masterUrl}/master/usr/`;
        return this.patchWithBodyAndQueryParams(
            url,
            'Patch user details ',
            this.handleError,
            queryparams,
            masterPatchDocument
        );
    }

    getUserUUidBasedOnSearch(params?): Observable<MDUser[]> {
        let queryparams = new HttpParams();
        if (params) {
            const attributes = params.attributes;
            const criteria = params.criteria;
            const roledetails = params.roledetails;
            const value = params.value;

            queryparams = queryparams.set('attributes', attributes);
            queryparams = queryparams.set('criteria', criteria);
            queryparams = queryparams.set('roledetails', roledetails);
            queryparams = queryparams.set('value', value);
        }
        const url = `${this.baseUrl}/master/usr/`;
        return this.readAll(
            url,
            'Get all user uuid based on enterd value failed',
            this.handleError,
            queryparams
        );
    }

    /**
     * This method is used get all contacts for that particular tenant
     */

    getAllContactsBasedOnTenantId(): Observable<MDContacts[]> {
        const url = `${
            this.masterUrl
        }/master/mycontacts/tenant/${encodeURIComponent(
            String(this.getActiveTenant())
        )}/`;
        return this.readAll(url, 'Get all contacts failed', this.handleError);
    }

    /**
     * This method is used to Get api  - get All Contacts
     */
    getAllContactsBasedOnTenantIdByfield(
        data: string
    ): Observable<MDContacts[]> {
        const url = `${
            this.masterUrl
        }/master/mycontacts/tenant/${encodeURIComponent(
            String(this.getActiveTenant())
        )}/`;
        let queryparams = new HttpParams();
        queryparams = queryparams.set('searchFilter', data);
        return this.readAll(
            url,
            'Get all people failed',
            this.handleError,
            queryparams
        );
    }
    /**
     * This method is used call Patch api to patch alias name
     * @param userId
     */

    updateAliasName(
        userId: string,
        masterPatchDocument: MasterPatchDocument[]
    ): Observable<MDContacts> {
        const url = `${
            this.masterUrl
        }/master/mycontacts/tenant/${encodeURIComponent(
            String(this.getActiveTenant())
        )}/user/${encodeURIComponent(String(userId))}/`;
        return this.patch(
            url,
            'Update Alias name',
            this.handleError,
            masterPatchDocument
        );
    }

    /**
     * This method is used call Delete Api
     * @param userId
     */

    deleteContact(userId: string): Observable<MDContacts> {
        let queryparams = new HttpParams();
        queryparams = queryparams.set('userid', userId);
        const url = `${
            this.masterUrl
        }/master/mycontacts/tenant/${encodeURIComponent(
            String(this.getActiveTenant())
        )}/`;

        return this.deleteWithParam(
            url,
            'Delete Contact',
            this.handleError,
            queryparams
        );
    }

    /**
     * This method is used call Get api - roles
     */
    getRoles(): Observable<MDUserRole[]> {
        const url = `${this.masterUrl}/master/tenant/${encodeURIComponent(
            String(this.getActiveTenant())
        )}/roles/`;
        return this.readAll(url, 'Get all roles failed', this.handleError);
    }

    /**
     * This method is used to Get api  - peoples
     */
    getPeoples(): Observable<MDUser[]> {
        const url = `${this.masterUrl}/master/tenant/${encodeURIComponent(
            String(this.getActiveTenant())
        )}/usr/`;
        return this.readAll(url, 'Get all people failed', this.handleError);
    }

    modifyEmployee(
        userId: string,
        params?,
        createOrUpdate?
    ): Observable<MDUser> {
        let queryparams = new HttpParams();
        queryparams = queryparams.set('subgroupName', params);
        const url = `${this.masterUrl}/master/tenant/${encodeURIComponent(
            String(this.getActiveTenant())
        )}/usr/${encodeURIComponent(String(userId))}/`;
        if (createOrUpdate == POST) {
            return this.createWithParam(
                url,
                'Profile Creation ',
                this.handleError,
                null,
                queryparams
            );
        } else {
            return this.patchWithParam(
                url,
                'Update roles failed',
                this.handleError,
                queryparams
            );
        }
    }

    /**
     * Delete api - mypeople
     */
    deleteProfile(userId: string): Observable<MDUser> {
        const url = `${this.masterUrl}/master/tenant/${encodeURIComponent(
            String(this.getActiveTenant())
        )}/usr/${encodeURIComponent(String(userId))}/`;

        return this.deleteWithParam(url, 'Delete Contact', this.handleError);
    }
    /**
     * Function to use get User Info By given data
     * @param params
     * @returns
     */
    getUserInfoBy(params?): Observable<MDUser[]> {
        let queryparams = new HttpParams();
        const url = `${this.masterUrl}/master/usr/'`;
        if (params) {
            const phvalue = params.phonenumber;
            const namevalue = params.name;
            const uuid = params.uuid;
            if (phvalue) {
                queryparams = queryparams.set('value', phvalue);
                queryparams = queryparams.set('criteria', 'phoneNumber');
                queryparams = queryparams.set('roledetails', false);
            } else if (namevalue) {
                queryparams = queryparams.set('phoneNumber', phvalue);
                queryparams = queryparams.set('criteria', 'name');
                queryparams = queryparams.set('roledetails', false);
            } else if (uuid) {
                queryparams = queryparams.set('value', uuid);
                queryparams = queryparams.set('criteria', 'uuid');
                queryparams = queryparams.set('roledetails', false);
            }
        }
        return this.readAll(
            url,
            'Get user failed',
            this.handleError,
            queryparams
        );
    }
}
