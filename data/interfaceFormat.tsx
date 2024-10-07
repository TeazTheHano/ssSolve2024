
export interface UserFormat {
    name: string;
    email: string;
    password: string;
    imgAddress: string;
}

export interface PillFormat {
    pill_id: string;
    pill_name: string;
    pill_brand?: string;
    pill_tags: string[]; // e.g. (thuốc giảm đau, thuốc hạ sốt)
    pill_quantity: number;
    pill_sellPrice: number;
    pill_buyPrice?: number;
    pill_packKind?: string; // e.g. (1 vỉ x 10 viên)
    pill_imgAddress?: any[];
    pill_indication?: (string | string[])[];
    pill_contraindication?: (string | string[])[];
    pill_discription?: (string | string[])[];
    pill_ingredient?: string[];
    pill_use?: (string | string[])[];
    pill_dosage?: (string | string[])[];
    pill_pharmacology?: string[]; // e.g. (cơ chế tác dụng)
    pill_pharmacokinetics?: string[]; // e.g. (dược động học)
    pill_sideEffects?: (string | string[])[];
    pill_interactions?: (string | string[])[];
    pill_precautions?: (string | string[])[];
    pill_overdose?: (string | string[])[];
    pill_overdose_handling?: (string | string[])[];
    pill_viewed?: number;
}

export interface PillPortFormat {
    pillport_id: string;
    pillport_name: string;
    pillport_address: string;
}

export interface OrderFormat {
    order_id: string;
    order_user_id: string;
    order_date: Date;
    order_status: string;
    order_total: number;
    order_item_ids: string[];
    order_pillPort_id: string;
}

export interface SearchResults {
    pills: PillFormat[];
    symptoms: string[];
    orders: OrderFormat[];
};

export interface DataStorageFormat {
    pillList: PillFormat[];
    pillPortList: PillPortFormat[];
    orderList: OrderFormat[];
    lastChange: Date;
}