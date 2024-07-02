const SET_CART = "SET_CART"
const SET_DISCART = "SET_DISCART"
const REMOVE_ITEM = "REMOVE_ITEM"
const ADD_MORE_PRODUCT = "ADD_MORE_PRODUCT"
const SET_CHECK = "SET_CHECK"
const CLEAR_REDUCER = "CLEAR_REDUCER"


const defaulStore = {
    arrOfId: [],
    totalPrice:0,
    bin:[]
}

export default function cartReducer(state = defaulStore, action) {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                arrOfId: [...state.arrOfId, action.payload]
            }
        case SET_DISCART:
            return {
                ...state,
                totalPrice: state.totalPrice += - ((state.totalPrice * action.payload ) / 100)
            }
        case SET_CHECK:
            return {
                ...state,
                totalPrice: state.totalPrice < 0 ? state.totalPrice = 0 : state.totalPrice
            }
      
        case ADD_MORE_PRODUCT:
            return {
                ...state,
                arrOfId: [...state.arrOfId, action.payload],
                totalPrice: state.totalPrice += action.total
        }   
        case REMOVE_ITEM:
            return {
                ...state,
                bin: state.arrOfId.splice((state.arrOfId.indexOf(action.payload)),1),
                totalPrice:  state.totalPrice - action.total
        }
        case CLEAR_REDUCER:
            return {
             arrOfId: [],
             totalPrice:0,
             bin:[]
        }

        default:
            return state
    }
}
export const setCartPrice = (id) => ({
    type: SET_CART,
    payload: id

})
export const setTotalPriceDiscount = (discount) => ({
    type: SET_DISCART,
    payload: discount

})
export const setCheckArrAndTotal = () => ({
    type: SET_CHECK,
    

})


export const setAddMoreProducts = (idProducta , price) => ({
    type: ADD_MORE_PRODUCT,
    payload: idProducta,
    total: price

})
export const setRemoveItem = (index , price) => ({
    type: REMOVE_ITEM,
    payload: index,
    total: price,

})
export const setClearReducer = () => ({
    type: CLEAR_REDUCER,

})