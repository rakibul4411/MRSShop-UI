import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { UserService } from '../shared/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService: UserService, private router: 
    Router) { }

  ngOnInit() {
  }

  OnSubmit(userName,password){
    this.userService.userAuthentication(userName, password).subscribe
    ((data : any ) =>{
      localStorage.setItem('userToken',data.token);
        this.router.navigate(['/mrsshop']);
        console.log(data.token);
      
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true; 
    });
  }
}
