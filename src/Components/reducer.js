export const initialState = {
    basket: [],
    user:null,
};

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            //To update user when they login or log out
            return{
                ...state,
                user:action.user,
            };
        case 'ADD_TO_BASKET':
            //Logic to add in basket
            return {
                ...state,
                basket: state.basket ? [...state.basket, action.item] : [action.item],
                //// Add item to basket if basket is defined, otherwise create a new basket with the item
            };
        case 'REMOVE_FROM_BASKET':
            //Logic to remove from basket
            //cloned the basket
            let newBasket = [...state.basket];
            //checking whether item to be remove exist or not
            const index  = state.basket.findIndex((basketItem) => basketItem.id ===action.id);
            if(index >=0)
            {
                //Item exist in basket, remove it...
                newBasket.splice(index,1);
            }
            else{
                console.warn(`Cant remove product (id:${action.id})`);
            }

            return {...state, basket:newBasket,};
                
        default:
            return state;
    }
};

export default reducer