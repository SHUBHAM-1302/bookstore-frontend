/*
 * <copyright>
 *
 * Copyright (c) 2023 Kanilebettu Technologies. All rights reserved.
 *
 * </copyright>
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorMessageService {

  private readonly errorMessages = {
    
    'LOT_NAME_DUPLICATE': 'Lot name repeated',
    'LOT_NAME_DUPLICATE_2': 'Lot name repeated'
  };

  

  
  getErrorMessage(errorMessasgeConstant:string): string {
    return this.errorMessages[errorMessasgeConstant as keyof typeof this.errorMessages];
    //return '';
  }

   /**
   * This method appends the common message after readable message is formed
   * @param errorMessasge is the readable error message
   * @returns appended message.
   */
  appendCommonMessage(errorMessage: string, type: string): string {
    return (`${errorMessage}${'. '}${'Refer the Kanilebettu User Documentation '}${type}${' configuration.'}`);
  }
    
}