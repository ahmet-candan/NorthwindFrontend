import { Product } from "./product";
import { ResponseModel } from "./responseModel";


export interface ProductResponseModel extends ResponseModel{ //datayı karşıalyacak bi model yapıyoruz.

    data:Product[],
    success:boolean,
    message:string
}