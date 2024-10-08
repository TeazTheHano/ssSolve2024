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

import { CartFormat, DataStorageFormat, OrderFormat, PillFormat, PillPortFormat, SearchResults, UserFormat } from "../interfaceFormat";

export interface CurrentCache {
    user: UserFormat;
    currentPill: PillFormat;
    cart: CartFormat[];
    searchFocus: boolean;
    searchContent: string;
    searchResult: SearchResults;
    DATA: DataStorageFormat;
}

export interface Action {
    type: string;
    payload?: UserFormat | boolean | PillFormat | PillFormat[] | string | string[] | OrderFormat | OrderFormat[] | SearchResults | DataStorageFormat | PillPortFormat | PillPortFormat[] | CartFormat | CartFormat[];
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
    cart: [],
    searchFocus: false,
    searchContent: '',
    searchResult: {
        pills: [],
        symptoms: [],
        orders: []
    },
    DATA: {
        pillList: [],
        pillPortList: [],
        orderList: [],
        lastChange: new Date(),
    },
};