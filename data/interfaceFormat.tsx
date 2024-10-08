
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
    pill_quantity: number; // e.g. (10)
    pill_sellPrice: number; // e.g. (10000)
    pill_buyPrice?: number; // e.g. (2000)
    pill_packKind?: string; // e.g. (1 vỉ x 10 viên)
    pill_imgAddress?: any[];
    pill_indication?: (string | string[])[]; // e.g. (chỉ định)
    pill_contraindication?: (string | string[])[]; // e.g. (chống chỉ định)
    pill_description?: (string | string[])[]; // e.g. (mô tả)
    pill_ingredient?: string[]; // e.g. (thành phần)
    pill_use?: (string | string[])[]; // e.g. (cách dùng)
    pill_dosage?: (string | string[])[]; // e.g. (liều lượng/ liều dùng)
    pill_pharmacology?: string[]; // e.g. (cơ chế tác dụng/ dược lý)
    pill_pharmacokinetics?: string[]; // e.g. (dược động học/ động học)
    pill_sideEffects?: (string | string[])[]; // e.g. (tác dụng phụ)
    pill_interactions?: (string | string[])[]; // e.g. (tương tác)
    pill_precautions?: (string | string[])[]; // e.g. (cảnh báo)
    pill_overdose?: (string | string[])[]; // e.g. (quá liều & quên liều)
    pill_overdose_handling?: (string | string[])[]; // e.g. (xử lý quá liều)
    pill_viewed?: number; // e.g. (10)
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