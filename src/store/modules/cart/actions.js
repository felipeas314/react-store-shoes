export function addToCartRequest(id){
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}