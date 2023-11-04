import { ActionTypes } from "../contents/action-types"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,//payload sono i dati ottenuti dalla fetch della lista prodotti
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    }
}

export const removeSelectedProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    };
};

export const removeFromCart = (product) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: product
    };
};
export const moreInCart = (productID) => {

    return {
        type: ActionTypes.MORE_IN_CART,
        payload: productID
    };
};
export const lessInCart = (productID) => {
    return {
        type: ActionTypes.LESS_IN_CART,
        payload: productID
    };
};
export const deleteFromCart = (productID) => {
    return {
        type: ActionTypes.DELETE_FROM_CART,
        payload: productID
    };
};