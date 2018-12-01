

    export interface Balance {
        funds_available: string;
        currency: string;
    }

    export interface Owner {
        id: string;
    }

    export class RootAccountObject {
        balance: Balance;
        owners: Owner[];
        id: string;
        label: string;
        type: string;
        status: string;
    }



