import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {
    constructor(private http: HttpClient) { }

    public getStudentsList() {
        return this.http.get('https://wisdom-api.herokuapp.com/api/students/');
    }
}