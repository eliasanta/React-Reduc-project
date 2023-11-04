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
    console.log(state)
    console.log(type)
    console.log(payload)
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            const existingProduct = state.find(item => item.id === payload.id);
            if (existingProduct) {
                // Se il prodotto esiste già nel carrello, aggiorna solo la quantità
                return state.map(item =>
                    item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Se il prodotto non esiste nel carrello, aggiungi il prodotto
                return [...state, { ...payload, quantity: 1 }];
            }
        case ActionTypes.MORE_IN_CART:
            // Trova il prodotto con lo stesso id e aggiorna la quantità
            return state.map(item => (item.id === payload ? { ...item, quantity: item.quantity + 1 } : item));

        case ActionTypes.LESS_IN_CART:
            // Trova il prodotto con lo stesso id e aggiorna la quantità
            return state.map(item => {
                if (item.id === payload && item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item; // Restituisci l'elemento invariato se la quantità è già zero
            });

        case ActionTypes.DELETE_FROM_CART:
            return state.filter(item => item.id !== payload);

        case ActionTypes.REMOVE_FROM_CART:
            const updatedCart = state.map(item =>
                item.id === payload.id
                    ? item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : null
                    : item
            ).filter(item => item !== null);

            return updatedCart;
        default:
            return state;
    }
};

//I reducer in Redux servono a gestire e aggiornare lo stato dell'applicazione in base alle azioni che vengono "dispacciate"/spedite
// nell'applicazione. Sono funzioni pure che accettano lo stato attuale e un'azione come argomenti e restituiscono un nuovo stato.