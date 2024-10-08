//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here
// export default function setReducer(state = initialState, action: Action): ExampleInitInter {
//     switch (action.type) {
//         case Example: {
//             return {
//                 ...state,
//                 example: action.payload
//             };
//         }
//         default:
//             return state;
//     }
// }

import { CartFormat, DataStorageFormat, PillFormat, UserFormat } from "../interfaceFormat";
import { initialState, Action, CurrentCache, SET_USER, SET_CURRENT_PILL, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, EDIT_ITEM_IN_CART, SET_SEARCH_FOCUS, SET_SEARCH_CONTENT, SET_SEARCH_RESULT, CLEAR_SEARCH_RESULT, SET_DATA } from "./index";

export default function setReducer(state = initialState, action: Action): CurrentCache {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload as UserFormat
            };
        }
        case SET_CURRENT_PILL: {
            return {
                ...state,
                currentPill: action.payload as PillFormat
            };
        }
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload as CartFormat]
            };
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.pill.pill_id !== (action.payload as PillFormat).pill_id)
            };
        }
        case CLEAR_CART: {
            return {
                ...state,
                cart: []
            };
        }
        case EDIT_ITEM_IN_CART: {
            return {
                ...state,
                cart: state.cart.map((item) => {
                    const payload = action.payload as unknown as CartFormat;
                    if (item.pill.pill_id === payload.pill.pill_id) {
                        return {
                            pill: item.pill,
                            orderQuantity: payload.orderQuantity
                        };
                    }
                    return item;
                })
            };
        }

        case SET_SEARCH_FOCUS: {
            return {
                ...state,
                searchFocus: action.payload as boolean
            };
        }

        case SET_SEARCH_CONTENT: {
            return {
                ...state,
                searchContent: action.payload as string
            };
        }

        case SET_SEARCH_RESULT: {
            return {
                ...state,
                searchResult: action.payload as {
                    pills: PillFormat[];
                    symptoms: string[];
                    orders: any[];
                }
            };
        }

        case CLEAR_SEARCH_RESULT: {
            return {
                ...state,
                searchResult: {
                    pills: [],
                    symptoms: [],
                    orders: []
                }
            };
        }

        case SET_DATA: {
            return {
                ...state,
                DATA: action.payload as DataStorageFormat
            };
        }

        default:
            return state;
    }
}