import { Injectable } from '@angular/core';
// import { contact } from "./contact";
import { Contact } from './contact';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(){
    return this.http.get("http://localhost:3000/api/contacts").pipe(map(res => res));
  }

  addContact(newContact:string){
    // const header = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/api/contacts", newContact).pipe(map(res => res));
  }

  deleteContact(id:string){
    return this.http.delete("http://localhost:3000/api/contacts/" + id).pipe(map(res => res));
  }
}
