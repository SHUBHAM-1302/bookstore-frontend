import {
    Component, OnInit,
    ViewEncapsulation
} from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from "@angular/forms";
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { KBMasterService } from 'src/app/shared/services/kb-master.service';
import { MDUserTenant } from 'src/gen/ms/models/mDUserTenant';
import { SaleOrderPatchDocument } from "src/gen/so/models";
import { Location } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { KBSessionService } from 'src/app/shared/services/kb-session.service';
import { UserProfileService } from './user-profile-detail.service';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { ValidationPatternsService } from '../../validation/validation-patterns.service';



interface userIdentityList {
    role: string;
    firm: string;
}


@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConfirmationService]
})


export class UserProfileComponent implements OnInit {
    userData: any;
    isAuthenticated = false;
    userName: string;
    userId: string;
    mdtenants: MDUserTenant[] | undefined;
    userRole: string;
    userIdentities: userIdentityList[] = [];
    userprofileForm: FormGroup;

    constructor(
        public oidcSecurityService: OidcSecurityService,
        private readonly kbMasterService: KBMasterService,
        private readonly formBuilder: FormBuilder,
        private location: Location,
        private _userProfileService: UserProfileService,
        private confirmationService: ConfirmationService,
        private readonly validationPattern: ValidationPatternsService,
    ) {

    }

    ngOnInit() {
        this.userprofileForm = this.formBuilder.group(this._userProfileService.getlotProfileFormAttributes());
        this.handleAuthOnUserInit();
    }

    handleAuthOnUserInit() {
        this.oidcSecurityService.isAuthenticated$.subscribe(
            ({ isAuthenticated }) => {
                this.isAuthenticated = isAuthenticated;
                if (this.isAuthenticated) {
                    this.oidcSecurityService.userData$.subscribe(({ userData }) => {
                        if (userData) {
                            this.userData = userData;
                            this.userName = userData.name;
                            this.userId = userData.id;
                            this.validationPattern.logedinUserId = userData.sub
                            this.getKBTenantWithRoleDetails(userData.sub);
                            this.userprofileForm.setValue({
                                firstName: this.toTitleCase(userData.given_name),
                                lastName: this.toTitleCase(userData.family_name),
                                mobileNumber: userData.preferred_username
                            });
                        }
                    });
                }
            }
        );
    }

    /**
       * Fetech the details about the valid tenanats associated to user
       * @param userId logged in user UUID
       */
    getKBTenantWithRoleDetails(userId: string) {
        this.kbMasterService.getMDTenantInfo(userId).subscribe({
            next: (response) => {
                this.mdtenants = response;
                this.userrolefunc();
            },
            error: (error) => {

            },
        });
    }

    toTitleCase(input: string): string {
        return input
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }


    userrolefunc() {
        this.mdtenants.forEach((identity) => {
            this.userRole = this.toTitleCase(identity.userRole);
            this.userIdentities.push({
                role: this.userRole,
                firm: identity.tenantName,
            });
        });


    }

    userprofileUpdate() {
        let userInfoPatch = this.getUpdatedUserinfoProperties();
    }

    getUpdatedUserinfoProperties(): SaleOrderPatchDocument[] {
        let userinfoPatch: SaleOrderPatchDocument[] = [];
        for (const controlName in this.userprofileForm.controls) {
            const control = this.userprofileForm.controls[controlName];
            if (control.dirty) {
                userinfoPatch.push(
                    this.prepareUserProfilePatch(
                        control.value,
                        controlName,
                        this.userprofileForm.controls
                    )
                );
            }
        }
        return userinfoPatch;
    }

    prepareUserProfilePatch(
        newValue,
        controlName,
        formControls: { [key: string]: AbstractControl<any> }
    ): SaleOrderPatchDocument {
        let userinfoPath;
        switch (controlName) {
            case "firstName": {
                userinfoPath = "/firstName";
                newValue = formControls["firstName"].value;
                break;
            }
            case "lastName": {
                userinfoPath = "/lastName";
                newValue = formControls["lastName"].value;
                break;
            }
            case "mobileNumber": {
                userinfoPath = "/username";
                newValue = formControls["mobileNumber"].value;
                break;
            }
        }
        let userInfoPatch: SaleOrderPatchDocument = {
            op: "replace",
            path: userinfoPath,
            value: newValue
        };
        return userInfoPatch;
    }

    goBackToPrevPage(): void {
        this.location.back();
    }

    /**
   * Function to get confirmation by user to allow changes .
   */
    confirmUpdateAction(event: Event) {
            this.confirmationService.confirm({
                target: event.target as EventTarget,
                message: 'Are you sure that you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let userPatchData = this.getUpdatedUserinfoProperties()
                    this._userProfileService.updateUserInfo(this.userData.sub, userPatchData)
                },
                reject: () => {
                }
            });
    }

}
