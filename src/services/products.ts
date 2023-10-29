import  apiclient  from "../confiq/axios";

class Products {
  public GetAllProducts = async (pageParam:number) => {
    return {
      data: await apiclient.get(`products?limit=8&&page=${pageParam}`),
      nextPage: pageParam + 1,
    };
  };
  public GetProductById = async (productId:string) => {
    return await apiclient.get(`products/${productId}`);
  };
}
export const PRODUCT = new Products();
