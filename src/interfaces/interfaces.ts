export interface UserProps{
    id: number;
    name: string;
    secondName: string;
    registerData: string;

}

export interface UserStoreProps{
    activeUser: UserProps;
    listOfUser: UserProps[]
}
export enum IncomeCategory {
  Salary = "Зарплата",
  Gifts = "Подарки",
  Investments = "Инвестиции",
}

export enum ExpenseCategory {
  Food = "Продукты питания",
  Transport = "Транспорт",
  Obligations = "Обязательства",
  Travel = "Путешествия и переезды",
  Leisure = "Досуг и развлечения",
}

export interface Operation {
  date: string;          // Дата операции в формате 'YYYY-MM-DD'
  category: IncomeCategory | ExpenseCategory;      // Категория (Продукты питания, Доходы, Транспорт и т.п.)
  subcategory: string;   // Подкатегория (Продукты домой, Зарплата, Такси и т.п.)
  comment?: string;      // Необязательный комментарий
  amount: number;        // Сумма (положительная для доходов, положительная для расходов)
  account: string;       // Счёт (например, "Тинькофф основной")
}

export interface NoteProps{
    'Категория': IncomeCategory | ExpenseCategory
    'Значение': number
}

export type PlotPoint = {
  date: string;        // для оси X: 'YYYY-MM-DD', 'Янв 2025' или '2025'
  income: number;
  expenses: number;
  savings: number;     // income - expenses за период (не кумулятив)
};

export type PeriodKey = "days" | "months" | "years";

export type PieRow = { category: string; value: number; color?: string };