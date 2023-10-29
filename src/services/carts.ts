import  apiclient  from "../confiq/axios";

class Carts {
  public CreateCart = async () => {
    return await apiclient.get("carts");
  };
  public GetCart = async ({cart_id}:{cart_id:string}) => {
    return await apiclient.get(`carts/${cart_id}`);
  };
  public AddToCart = async ({id,cart_id,quantity}:{cart_id:string,id:string,quantity:number}) => {
   return  await apiclient.post(`carts/${cart_id}`,JSON.stringify({quantity,id}));
  };
  public RemoveItemFromCart = async ({cart_id,line_item_id}:{cart_id:string,line_item_id:string}) => {
    return  await apiclient.delete(`carts/${cart_id}/items/${line_item_id}`);
   };
}
export const CART = new Carts();
