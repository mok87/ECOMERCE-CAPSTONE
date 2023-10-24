// For Add Item to Cart
export const addCart = (product) =>{
    return{
        type : "ADDITEM",
        payload : product
    }
  }
  export const UPDATE_QTY = 'UPDATE_QTY';

  export const updateQty = (productId, newQty) => ({
    type: UPDATE_QTY,
    payload: { productId, newQty },
  });

  // For Delete Item to Cart
  export const delCart = (product) =>{
    return{
        type : "DELITEM",
        payload : product
    }
  }
