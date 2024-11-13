import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl='https://services.kanilebettu.in/v1/md/master/cmdtyp/'


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  getAllCMD():Observable<any> { 
    return this.http.get<any>('https://services.kanilebettu.in/v1/md/master/cmdtyp/');
  }
getAllPackT():Observable<any>{
  return this.http.get<any>('https://services.kanilebettu.in/v1/md/master/pkgtype/')
}
getALLFreight():Observable<any>{
  return this.http.get<any>('https://services.kanilebettu.in/v1/md/master/frgtyp/')
}
// getAllCmdSub():Observable<any>{
//   return this.http.get<any>('')
// }
getCmdsubtypeByCoid(coid:any):Observable<any>{
   return this.http.get(`${baseUrl}${coid}/cmdsubtyp/`)
}}
