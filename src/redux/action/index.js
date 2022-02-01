// for add item to cart
export const addItem = (product) =>{
    return{
        type:   'additem',
        payload: product 
    }
}

// for delete item from cart
export const deleteItem = (product) =>{
    return{
        type:   'delitem',
        payload: product 
    }
}