import { Injectable } from '@angular/core';
import { KBMasterService } from '../../services/kb-master.service';
import { KBNotificationService } from '../../notification/kb-notification.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ValidationPatternsService } from '../../validation/validation-patterns.service';
import { BidService } from 'src/app/salespad/bid/bid.service';
import { FormControl, Validators } from '@angular/forms';
import { MasterPatchDocument } from 'src/gen/ms/models/masterPatchDocument';
import { MDUser } from 'src/gen/ms/models/mDUser';
import { NUMBER_MAX_LENGTH, NUMBER_MIN_LENGTH } from '../../kb-common.constants';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
    logedinUserId!: string;


    constructor(private readonly kBMasterService: KBMasterService,
        private kbnotificationService: KBNotificationService,
        public oidcSecurityService: OidcSecurityService,
        private readonly validationPattern: ValidationPatternsService,
        private readonly bidService: BidService,
      ) { }

      /**
       * Returns the form attributes for the profie creation form group.
       * @returns Form attributes for the profie creation form group.
       */
      getlotProfileFormAttributes(): {} {
        return {
          firstName: new FormControl(null, [
            Validators.required,
            Validators.pattern(this.validationPattern.noWhitespaceOnly()),
            Validators.pattern(this.validationPattern.noHtmlTags()),
          ]),
          lastName: new FormControl(null, []),
          mobileNumber: new FormControl(null, [
            Validators.required,
            Validators.minLength(NUMBER_MIN_LENGTH),
            Validators.maxLength(NUMBER_MAX_LENGTH),
            Validators.pattern(this.validationPattern.phoneNumber()),
            Validators.pattern(this.validationPattern.noWhitespaceOnly()),
            Validators.pattern(this.validationPattern.noHtmlTags()),
          ], [
            this.validationPattern.registeredMobileNumberValidator()
          ]),
        };
      }

      /**
       * Function to use update the user details by uuid
       * @param userId
       * @param masterPatchDocument
       */
      updateUserInfo(userId: string, masterPatchDocument: MasterPatchDocument[]) {
        this.kBMasterService.patchUserByUUID(userId, masterPatchDocument).subscribe({
          next: (response: MDUser) => {
            this.logoutAfterUserInfoUpdate();
            this.kbnotificationService.showSuccess({
              summary: "Profile",
              detail: " User Info updated successfully",
            });
          },
          error: (error) => {
            this.kbnotificationService.showError({
              summary: "Profile ",
              detail: "User Info updation failed",
            });
          }
        });
      }

      /**
       * Function to make user logout .
       */
      logoutAfterUserInfoUpdate() {
        this.oidcSecurityService
          .logoff()
          .subscribe();
      }

}
