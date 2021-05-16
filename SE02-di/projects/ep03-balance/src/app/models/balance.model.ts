export type Type = 'Income' | 'Expense'

export interface StorageService {
  loadResource(): void;
  saveResource(): void;
}

// Category Sector
export interface Category {
  id: number;
  type: Type | '';
  name: string;
  deleted: boolean;
}

// Balance Sector
export interface Balance {
  readonly id: number,
  readonly category: any,
  readonly useDate: Date,
  readonly total: number,
  readonly employee: string
}

export interface BalanceDetails {
  readonly id: number,
  readonly balance: any,
  readonly item: string,
  readonly unit: number,
  readonly amount: number,
  readonly remark: string
}

export interface BalanceWithDetails {
  balance: Balance,
  details: BalanceDetails[]
}

export interface BalanceVO {
  id: number,
  useDate: Date,
  category: Category,
  employee: string,
  total: number,
  balanceTotal: number
}

// Search Sector
export interface BalanceSearch {
  type: string,
  category: string,
  from: string,
  to: string
}

export type CategorySearch = {
  type: Type | '',
  name?: string,
  deleted?: boolean
};
