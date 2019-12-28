export function addToCartRequest(product){
    return {
        type: '@cart/ADD',
        product
    }
}

export function removeFromCart(id){
    return {
        type: '@cart/Remove',
        id
    }
}

export function updateAmountResquest(id, amount){
    return{
        type: '@cart/UPDATE_AMOUNT',
        id,
        amount
    }
}