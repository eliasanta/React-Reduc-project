import { ActionTypes } from "../contents/action-types";

const initialState = {
    products: []
}
//Ogni reducer verifica se l'azione è di interesse (in base al tipo) e, se sì, calcola un nuovo stato in base all'azione.
export const productReducer = (state = initialState, { type, payload }) => {//{ type, payload } è la mia action che mi torna appunto type e payload
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };//ritorno lo stato con il nuovo payload ottenuto dalla fetch impostati con dispatch(setProducts(response.data))
        default:
            return state;
    }
}
export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}
// reducers.js
export const cartReducer = (state = [], { type, payload }) => {
    console.log(type, payload)
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return [...state, payload];  // Aggiungi il prodotto al carrello
        case ActionTypes.REMOVE_FROM_CART:
            return state.filter(item => item.id !== payload.id);  // Rimuovi il prodotto dal carrello
        default:
            return state;
    }
};

//I reducer in Redux servono a gestire e aggiornare lo stato dell'applicazione in base alle azioni che vengono "dispacciate"/spedite
// nell'applicazione. Sono funzioni pure che accettano lo stato attuale e un'azione come argomenti e restituiscono un nuovo stato.