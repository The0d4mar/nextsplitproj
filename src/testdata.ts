import { ExpenseCategory, IncomeCategory, Operation } from "./interfaces/interfaces";

export function returnData() : Operation[]{
    return [
  // Январь
   { date: "2025-01-05", category: IncomeCategory.Salary, subcategory: "Основная работа", amount: 120000, account: "Тинькофф основной" },
  { date: "2025-01-07", category: ExpenseCategory.Food, subcategory: "Продукты домой", amount: 3400, account: "Тинькофф основной" },
  { date: "2025-01-09", category: ExpenseCategory.Transport, subcategory: "Такси", amount: 870, account: "Тинькофф основной" },
  { date: "2025-01-10", category: ExpenseCategory.Leisure, subcategory: "Подписки", amount: 499, account: "Тинькофф основной" },
  { date: "2025-01-12", category: ExpenseCategory.Obligations, subcategory: "Кредиты / ипотека", amount: 15000, account: "Тинькофф основной" },
  { date: "2025-01-15", category: IncomeCategory.Investments, subcategory: "Дивиденды", amount: 6800, account: "Тинькофф брокер" },
  { date: "2025-01-18", category: ExpenseCategory.Food, subcategory: "Доставка еды", amount: 1800, account: "Тинькофф основной" },
  { date: "2025-01-20", category: ExpenseCategory.Travel, subcategory: "Билеты", amount: 9200, account: "Тинькофф основной" },
  { date: "2025-01-25", category: IncomeCategory.Gifts, subcategory: "День рождения", amount: 9000, account: "Тинькофф основной" },

  // Февраль
  { date: "2025-02-05", category: IncomeCategory.Salary, subcategory: "Основная работа", amount: 120000, account: "Тинькофф основной" },
  { date: "2025-02-06", category: ExpenseCategory.Food, subcategory: "Продукты домой", amount: 2600, account: "Тинькофф основной" },
  { date: "2025-02-08", category: ExpenseCategory.Transport, subcategory: "Общественный транспорт", amount: 940, account: "Тинькофф основной" },
  { date: "2025-02-11", category: ExpenseCategory.Leisure, subcategory: "Кино", amount: 1200, account: "Тинькофф основной" },
  { date: "2025-02-12", category: ExpenseCategory.Obligations, subcategory: "Кредиты / ипотека", amount: 15000, account: "Тинькофф основной" },
  { date: "2025-02-15", category: IncomeCategory.Investments, subcategory: "Дивиденды", amount: 7100, account: "Тинькофф брокер" },
  { date: "2025-02-18", category: ExpenseCategory.Food, subcategory: "Доставка еды", amount: 1950, account: "Тинькофф основной" },
  { date: "2025-02-22", category: ExpenseCategory.Food, subcategory: "Продукты домой", amount: 3100, account: "Тинькофф основной" },
  { date: "2025-02-28", category: IncomeCategory.Gifts, subcategory: "Подарок от друзей", amount: 6000, account: "Тинькофф основной" },

  // Март
  { date: "2025-03-05", category: IncomeCategory.Salary, subcategory: "Основная работа", amount: 120000, account: "Тинькофф основной" },
  { date: "2025-03-06", category: ExpenseCategory.Food, subcategory: "Продукты домой", amount: 2950, account: "Тинькофф основной" },
  { date: "2025-03-09", category: ExpenseCategory.Transport, subcategory: "Такси", amount: 720, account: "Тинькофф основной" },
  { date: "2025-03-11", category: ExpenseCategory.Leisure, subcategory: "Подписки", amount: 499, account: "Тинькофф основной" },
  { date: "2025-03-12", category: ExpenseCategory.Obligations, subcategory: "Кредиты / ипотека", amount: 15000, account: "Тинькофф основной" },
  { date: "2025-03-15", category: IncomeCategory.Investments, subcategory: "Дивиденды", amount: 8400, account: "Тинькофф брокер" },
  { date: "2025-03-19", category: ExpenseCategory.Food, subcategory: "Доставка еды", amount: 2100, account: "Тинькофф основной" },
  { date: "2025-03-22", category: ExpenseCategory.Travel, subcategory: "Билеты", amount: 9800, account: "Тинькофф основной" },
  { date: "2025-03-25", category: IncomeCategory.Gifts, subcategory: "Подарок от родителей", amount: 7500, account: "Тинькофф основной" },

  // …и так далее для апреля, мая, июня (по тому же шаблону)
]
}