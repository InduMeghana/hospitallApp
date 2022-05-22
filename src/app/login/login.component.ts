import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login=new Login();
  constructor(private router:Router){ }
  ngOnInit(): void {
  }
  onclick(){
    if(this.login.userid=="admin"&&this.login.password=="admin"){
      this.router.navigate(['/create'])
    }
  }

}
