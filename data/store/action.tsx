//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { CartFormat, DataStorageFormat, OrderFormat, PillFormat, UserFormat } from "../interfaceFormat";

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
export const addToCart = (pill: CartFormat) => {
    return {
        type: ADD_TO_CART,
        payload: pill
    }
}

export const REMOVE_FROM_CART = `REMOVE_FROM_CART`;
export const currentRemoveItemInCart = (pill: PillFormat) => {
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

export const EDIT_ITEM_IN_CART = `EDIT_ITEM_IN_CART`;
export const currentEditItemInCart = (item: CartFormat) => {
    return {
        type: EDIT_ITEM_IN_CART,
        payload: item
    }
}

export const SET_SEARCH_FOCUS = `SET_SEARCH_FOCUS`;
export const setSearchFocus = (focus: boolean) => {
    return {
        type: SET_SEARCH_FOCUS,
        payload: focus
    }
}

export const SET_SEARCH_CONTENT = `SET_SEARCH_CONTENT`;
export const setSearchContent = (content: string) => {
    return {
        type: SET_SEARCH_CONTENT,
        payload: content
    }
}

export const SET_SEARCH_RESULT = `SET_SEARCH_RESULT`;
export const setSearchResult = (result: { pills: PillFormat[], symptoms: string[], orders: OrderFormat[] }) => {
    return {
        type: SET_SEARCH_RESULT,
        payload: result
    }
}

export const CLEAR_SEARCH_RESULT = `CLEAR_SEARCH_RESULT`;
export const clearSearchResult = () => {
    return {
        type: CLEAR_SEARCH_RESULT
    }
}

export const SET_DATA = `SET_DATA`;
export const setData = (data: DataStorageFormat) => {
    return {
        type: SET_DATA,
        payload: data
    }
}

export const CURRENT_SAVE_ORDER = `CURRENT_SAVE_ORDER`;
export const currentSaveOrder = (order: OrderFormat) => {
    return {
        type: CURRENT_SAVE_ORDER,
        payload: order
    }
}

export const CURRENT_REMOVE_ORDER = `CURRENT_REMOVE_ORDER`;
export const currentRemoveOrder = (id: string) => {
    return {
        type: CURRENT_REMOVE_ORDER,
        payload: id
    }
}

export const CURRENT_CLEAR_ORDER = `CURRENT_CLEAR_ORDER`;
export const currentClearOrder = () => {
    return {
        type: CURRENT_CLEAR_ORDER
    }
}