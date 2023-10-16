import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, cartReducer } from "./productReducer";

//combine reducer permette di combinare piu reducer
const reducers = combineReducers({
    allProducts: productReducer,//i reducer gestisce lo stato relativo ai prodotti
    product: selectedProductReducer,//reducer gestisce lo stato relativo al prodotto selezionato
    cart: cartReducer, //reducer per la gestione del carrello
});
export default reducers;