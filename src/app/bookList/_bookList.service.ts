import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from '../shared/base/base-http.service';
import { HandleError, HttpErrorHandler } from '../shared/base/http-error-handler.service';
import { environment } from 'src/environments/environment';
import { KBSessionService } from '../shared/services/kb-session.service';
import { JRNLPatchDocument } from 'src/gen/jrnl/jRNLPatchDocument';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class _bookListService {

  protected basePath = environment.apiURL;

  private readonly handleError: HandleError;

  /**
    * Constructs the BidService.
    * @param http - The HttpClient instance.
    * @param httpErrorHandler - The HttpErrorHandler instance.
    */
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler,
    kbSessionService: KBSessionService) {
    // super(http, kbSessionService);
    this.handleError = httpErrorHandler.createHandleError('sp-seller.Service');
  }



  private apiUrl = `http://localhost:3070/v1/md/book/`;  // Replace with your actual API URL



  // Method to get books from the API
  getAllBooks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // HTTP GET request to the API
  }

  // getAllBooks() {
  //   const url = `http://localhost:3070/v1/md/book/`;
  //   return this.read(url, 'Get all Book', this.handleError, undefined, new HttpParams())
  // }

  patchBook(id: number, spPatchDocument: JRNLPatchDocument[]) {
    console.log("55555");

    const url = `http://localhost:3070/v1/md/book/${encodeURIComponent(id)}/`
    // ...using Put request
    const patchHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      Accept: 'application/json',
    });
    const patchHttpOptions = {
      headers: patchHeaders,
    };
    console.log(spPatchDocument);

    return this.http.patch<any>(url, spPatchDocument, patchHttpOptions)

    //  return this.patchWithoutUpsert(url, 'patch bid for sp_id' + spPatchDocument, this.handleError, spPatchDocument);
    //   return null;
  }

}
