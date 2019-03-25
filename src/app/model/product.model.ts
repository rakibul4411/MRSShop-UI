import { Supplier } from "./supplier.model";
import { Rating } from "./rating.model";

export class Product {

  constructor(
    public productId?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number,
    public feature?: string,
    //public imagePath?: File,
    public stock?: number,
    public purchaseStock?: number,
    public minStocklevel?: number,
        //public productId?: number,
        //public name?: string,
        //public category?: string,
        //public description?: string,
        //public price?: number,
        //public feature?: string,
        //public imagePath?: string,
        //public stock?: number,
        //public prchaseStock?: number,
        //public minStocklevel?: number,

        public supplier?: Supplier,
        public ratings?: Rating[]) { }

  //public productId?: number;
  //public name?: string;
  //public category?: string;
  //public description?: string;
  //public price?: number;
  //public feature?: string;
  //public imagePath?: File;
  //public stock?: number;
  //public prchaseStock?: number;
  //public minStocklevel?: number;

  //public supplier?: Supplier;
}
