//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here
// export interface ExampleInitInter {
//     example: string;
// }
// export interface Action {
//     type: string;
//     payload?: any;
// }
// export const initialState: ExampleInit = {
//     example: 'example'
// };

import { PillFormat, UserFormat } from "../data";

export interface CurrentCache {
    user: UserFormat;
    currentPill: PillFormat;
    cart: PillFormat[];
}

export interface Action {
    type: string;
    payload?: UserFormat | PillFormat | PillFormat[];
}

export const initialState: CurrentCache = {
    user: {
        name: '',
        email: '',
        password: '',
        imgAddress: ''
    },
    currentPill: {
        pill_id: '',
        pill_name: '',
        pill_tags: [],
        pill_quantity: 0,
        pill_sellPrice: 0,
    },
    cart: []
};