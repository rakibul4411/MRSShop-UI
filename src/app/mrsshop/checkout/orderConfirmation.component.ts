import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Order } from "../../model/order.model";

@Component({
    templateUrl: "orderConfirmation.component.html"
})
export class OrderConfirmationComponent {

    constructor(private router: Router,
        public order: Order) {
        if (!order.submitted) {
            router.navigateByUrl("/checkout/step3");
        }
    }
}
