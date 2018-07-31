import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData{
  obj: any
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username,password){
    //post details to API server return info if correct
    return this.http.post('/api/auth.php',{
      username,
      password

    })
  }
  getData(){
    return this.http.get<myData>('/api/records.php');
  }
}
