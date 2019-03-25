import { Component, OnInit } from "@angular/core";
import { Repository } from "../model/repository";
import { UserService } from "../shared/services/user.service";
import * as jwt_decode from "jwt-decode";

@Component({
  templateUrl: "admin.component.html",
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  public user: boolean = false;
  public userName: string = "";
    router: any;
    constructor(private repo: Repository,
      public authService: UserService) {
        repo.filter.reset();
        repo.filter.related = true;
        this.repo.getProducts();
        this.repo.getSuppliers();
        this.repo.getOrders();
  }
  ngOnInit() {
    var token = localStorage.getItem('userToken');
    //this.token = token;
    var decoded = jwt_decode(token);
    var role = decoded.typ;
    console.log(role);

    if (role == "Operator") {
      this.user = true;
      console.log(this.user);
    }
    //if (role == "User") {
    //  this.user = true;
    //  console.log(this.user);
    //}
    if (role == "Admin") {
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
