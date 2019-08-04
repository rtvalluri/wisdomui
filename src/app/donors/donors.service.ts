import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DonorsService {
    constructor(private http: HttpClient) { }

    public getDonorsList() {
        return this.http.get('https://wisdom-api.herokuapp.com/api/donors/');
    }
}