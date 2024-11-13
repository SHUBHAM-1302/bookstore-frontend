import { Injectable } from '@angular/core';
import { AbstractSecurityStorage } from 'angular-auth-oidc-client';


@Injectable({ providedIn: 'root' })
export class KBLocalStorageService implements AbstractSecurityStorage {
  public read(key: string): any {
    return localStorage.getItem(key);
  }

  public write(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
