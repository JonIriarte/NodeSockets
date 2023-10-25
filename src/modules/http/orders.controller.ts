import { JsonController, Post, Body } from "routing-controllers";
import OrdersService from "../../libs/order.service";

@JsonController('/orders', { transformResponse: true })
class OrdersController {

   @Post('/')
   insertOrder(@Body() order: any) {
       try {
        let orderService = new OrdersService();
       orderService.insertOrder(order);

       return {
           status: 200,
           success: true
       };
       } catch (error) {
        console.log(error); 
       }
   }
}

export default OrdersController;
