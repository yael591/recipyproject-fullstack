import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipyClass } from '../../class/recipy';

@Injectable({
  providedIn: 'root'
})
export class RecipyService {

  url:string="http://localhost:1234/recipy/"

  constructor(private htt:HttpClient) {
     
   }


  getAll():Observable<Array<any>>{
    return this.htt.get<Array<any>>(`${this.url}getAllRecipies`)
  }

  getRecipyById(_id:string):Observable<RecipyClass>{
    return this.htt.get<RecipyClass>(`${this.url}getRecipyById/${_id}`)
  }

  add(newRecipy:any):Observable<boolean>{
    return this.htt.post<boolean>(`${this.url}addRecipy`,newRecipy)
  }

  uptate(_id:string,newRecipe:RecipyClass):Observable<boolean>{
    return this.htt.post<boolean>(`${this.url}patchRecipy/${_id}`,newRecipe)
  }

  delete(_id:string):Observable<RecipyClass>{
    return this.htt.get<RecipyClass>(`${this.url}getRecipyById/${_id}`)
  }
}
