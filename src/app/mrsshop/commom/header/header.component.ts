import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { FormsModule } from '@angular/forms';
import * as jwt_decode from "jwt-decode";
import { User } from '../../../model/user';
import { decode } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user:boolean=false;
  public userName:string = "";
  token: any;
  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    var token = localStorage.getItem('userToken');
    this.token = token;
    var decoded = jwt_decode(token);
    var role = decoded.typ;
    console.log(role);

    if(role == "Operator" )
    {
      this.user = true;
      console.log(this.user);
    }
    if (role == "User") {
      this.user = true;
      console.log(this.user);
    }

    if(role == "Admin"){
      this.user = true;
      console.log(this.user);
    }
    var name = decoded.sub;
    this.userName = name;
    console.log(this.userName);
  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/mrsshop']);
  }
}
