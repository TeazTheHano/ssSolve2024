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

import { PillFormat, UserFormat } from "../data";
import { initialState, Action, CurrentCache, SET_USER, SET_CURRENT_PILL, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, SET_CART } from "./index";

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
                cart: [...state.cart, action.payload as PillFormat]
            };
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.pill_id !== (action.payload as PillFormat).pill_id)
            };
        }
        case CLEAR_CART: {
            return {
                ...state,
                cart: []
            };
        }
        case SET_CART: {
            return {
                ...state,
                cart: action.payload as PillFormat[]
            };
        }

        default:
            return state;
    }
}