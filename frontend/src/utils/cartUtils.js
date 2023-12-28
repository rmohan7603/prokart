export const addDecimals=(num)=>{
    return (Math.round(num*100)/100).toFixed(2);
}

export const updateCart=(state)=>{ 
    //Calculate items price
    state.itemsPrice=addDecimals(state.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0));
            
    //Calculate shiping price(If order over 499 then free, else 119 shipping)
    state.shippingPrice=addDecimals(state.itemsPrice>499?0:119);
    
    //Calculate tax price(5%tax)
    state.taxPrice=addDecimals(Number((0.05 * state.itemsPrice).toFixed(2)));
    
    //Calculate total price
    state.totalPrice=(
        Number(state.itemsPrice)+
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem('cart',JSON.stringify(state));
    return state;
}