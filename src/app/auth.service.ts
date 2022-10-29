import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base = environment.base;

  constructor(private http:HttpClient) { }

  listarUsuarios(){
    return this.http.get(`${this.base}users`)
    //return this.http.get('http://localhost:8001/api/users')
  }
}
