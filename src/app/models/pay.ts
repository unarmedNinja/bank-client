

    export interface NetPayAmount {
        amountValue: number;
        currencyCode: string;
    }

    export interface GrossPayAmount {
        amountValue: number;
        currencyCode: string;
    }

    export interface PayDetailUri {
        href: string;
    }

    export interface PayStatement {
        payDate: string;
        netPayAmount: NetPayAmount;
        grossPayAmount: GrossPayAmount;
        totalHours: number;
        payDetailUri: PayDetailUri;
    }

    export class RootPayObject {
        retirementPlanIndicator: boolean;
        payStatements: PayStatement[];
    }



