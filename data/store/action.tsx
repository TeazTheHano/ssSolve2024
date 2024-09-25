//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { PillFormat, UserFormat } from "../data";

// export const EXAMPLE = `EXAMPLE`;
// export const examplefnc = (item: any) => {
//     return {
//         type: EXAMPLE,
//         payload: item
//     }
// }

export const SET_USER = `SET_USER`;
export const setUser = (user: UserFormat) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const SET_CURRENT_PILL = `SET_CURRENT_PILL`;
export const setCurrentPill = (pill: PillFormat) => {
    return {
        type: SET_CURRENT_PILL,
        payload: pill
    }
}

export const ADD_TO_CART = `ADD_TO_CART`;
export const addToCart = (pill: PillFormat) => {
    return {
        type: ADD_TO_CART,
        payload: pill
    }
}

export const REMOVE_FROM_CART = `REMOVE_FROM_CART`;
export const removeFromCart = (pill: PillFormat) => {
    return {
        type: REMOVE_FROM_CART,
        payload: pill
    }
}

export const CLEAR_CART = `CLEAR_CART`;
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const SET_CART = `SET_CART`;
export const setCart = (cart: PillFormat[]) => {
    return {
        type: SET_CART,
        payload: cart
    }
}