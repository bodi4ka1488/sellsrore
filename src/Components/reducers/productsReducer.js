const SET_PRODUCTS = "SET_PRODUCTS"
const SET_IS_FETCH = "SET_IS_FETCH"
const SET_IS_ACTIVE = "SET_IS_ACTIVE"
const SET_PRODUCT_CATEGORY = "SET_PRODUCT_CATEGORY"
const SET_CURRENT_SEARCHVALUE = "SET_CURRENT_SEARCHVALUE"
const SET_SINGLE_CURRENT = "SET_SINGLE_CURRENT"

const defaulStore = {
    items: [],
    prodCategory: [],
    isActive: false,
    singleProduct:[],
    isFetching: true,
}

export default function productsReducer(state = defaulStore, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                items: action.payload,
                isFetching: false
            }
     
        case SET_PRODUCT_CATEGORY:
            return {
                ...state,
                prodCategory: action.payload

            }
        case SET_SINGLE_CURRENT:
            return {
                ...state,
                singleProduct: action.payload

            }
        case SET_IS_ACTIVE:
            return {
                ...state,
                isActive: action.payload

            }
        

        default:
            return state
    }

}


export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products

})
export const setIsFetching = (bool) => ({
    type: SET_IS_FETCH,
    payload: bool

})

export const setCaregorySearchValue = (category) => ({
    type: SET_CURRENT_SEARCHVALUE,
    payload: category

})

export const setSingleProduct = (prod) => ({
    type: SET_SINGLE_CURRENT,
    payload: prod

})
export const setProductCategory = (prod) => ({
    type: SET_PRODUCT_CATEGORY,
    payload: prod

})

export const setIsActive = (bool) => ({
    type: SET_IS_ACTIVE,
    payload: bool

})

