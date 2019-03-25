import { Component } from "@angular/core";
import { Repository } from "../model/repository";
import { Product } from "../model/product.model";
import { Supplier } from "../model/supplier.model";

@Component({
  templateUrl: "productAdmin.component.html"
})
export class ProductAdminComponent {

  constructor(private repo: Repository) { }

  tableMode: boolean = true;

  get product(): Product {
    return this.repo.product;
  }

  selectProduct(id: number) {
    this.repo.getProduct(id);
  }

  saveProduct() {
    if (this.repo.product.productId == null) {
      this.repo.createProduct(this.product);
    } else {
      this.repo.replaceProduct(this.repo.product);
    }
    this.clearProduct()
    this.tableMode = true;
  }

  deleteProduct(id: number) {
    this.repo.deleteProduct(id);
  }

  clearProduct() {
    this.repo.product = new Product();
    this.tableMode = true;
  }

  get products(): Product[] {
    return this.repo.products;
  }
}
