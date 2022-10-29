import { Component } from '@angular/core';
import {AuthService} from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laravel-angular-cli';
  usuarios = [];
  constructor(private authService: AuthService){
  }

  ngOnInit(): void{
    this.authService.listarUsuarios().subscribe((data:any) =>{
      console.log(data);
      this.usuarios = data;
    })
  }
}
