import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/book";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class BookService{
    
    private url = 'https://api.itbook.store/1.0/new'
    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }
    constructor(private httpClient: HttpClient){

    }
    
    getBook():Observable<any> {
        return this.httpClient.get<any>(this.url)
    }
}

