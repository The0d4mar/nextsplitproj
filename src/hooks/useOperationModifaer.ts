import { Operation, IncomeCategory, ExpenseCategory, PieRow } from "@/interfaces/interfaces";

export type PeriodKey = "days" | "months" | "years";

export type LinePoint = {
  date: string;      // 'YYYY-MM-DD' | 'Янв 2025' | '2025'
  income: number;
  expenses: number;
  savings: number;   // income - expenses (за период, не кумулятив)
};


const monthsShort = ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"];

function isIncome(cat: IncomeCategory | ExpenseCategory): cat is IncomeCategory {
  return Object.values(IncomeCategory).includes(cat as IncomeCategory);
}

function getBucket(dateISO: string, period: PeriodKey) {
  const iso = dateISO.slice(0, 10);
  const year = iso.slice(0, 4);
  const mm = iso.slice(5, 7);
  const monthIdx = Math.max(0, Math.min(11, Number(mm) - 1));

  if (period === "days") {
    return { key: iso, sortKey: iso, label: iso }; // YYYY-MM-DD
  }
  if (period === "months") {
    const key = `${year}-${mm}`;                   // YYYY-MM
    return { key, sortKey: key, label: `${monthsShort[monthIdx]} ${year}` };
  }
  // years
  return { key: year, sortKey: year, label: year }; // YYYY
}

/**
 * Универсальный хук: из операций делает
 * - line: точки для LineChart по выбранному периодy (days|months|years)
 * - incomePie: распределение доходов по категориям за выбранный диапазон
 * - expensePie: распределение расходов по категориям за выбранный диапазон
 *
 * Ожидается, что входной `ops` уже отфильтрован по диапазону дат (если нужно),
 * напр. через твой useSliceOperation.
 */
export function useOperationData(
  ops: Operation[],
  period: PeriodKey = "months"
): { line: LinePoint[]; incomePie: PieRow[]; expensePie: PieRow[] } {
  if (!Array.isArray(ops) || ops.length === 0) {
    return { line: [], incomePie: [], expensePie: [] };
  }

  // ---- PIE (агрегация по категориям за весь входной диапазон) ----
  const incomeMap = new Map<string, number>();
  const expenseMap = new Map<string, number>();

  for (const op of ops) {
    if (isIncome(op.category)) {
      incomeMap.set(op.category, (incomeMap.get(op.category) ?? 0) + Math.max(0, op.amount));
    } else {
      expenseMap.set(op.category, (expenseMap.get(op.category) ?? 0) + Math.max(0, op.amount));
    }
  }

  const incomePie: PieRow[] = [...incomeMap.entries()].map(([category, value]) => ({ category, value }));
  const expensePie: PieRow[] = [...expenseMap.entries()].map(([category, value]) => ({ category, value }));

  // ---- LINE (агрегация по выбранному периодy) ----
  // сначала нормализуем на "дни": key = YYYY-MM-DD
  const byDay = new Map<string, { income: number; expenses: number }>();

  for (const op of ops) {
    const iso = op.date.slice(0, 10);
    const bucket = byDay.get(iso) ?? { income: 0, expenses: 0 };
    if (isIncome(op.category)) bucket.income += Math.max(0, op.amount);
    else bucket.expenses += Math.max(0, op.amount);
    byDay.set(iso, bucket);
  }

  if (period === "days") {
    const daily = [...byDay.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map<LinePoint>(([iso, v]) => ({
        date: iso,
        income: v.income,
        expenses: v.expenses,
        savings: v.income - v.expenses,
      }));
    return { line: daily, incomePie, expensePie };
  }

  if (period === "months") {
    const byMonth = new Map<string, { sortKey: string; label: string; income: number; expenses: number }>();

    for (const [iso, v] of byDay.entries()) {
      const { key, sortKey, label } = getBucket(iso, "months");
      const agg = byMonth.get(key) ?? { sortKey, label, income: 0, expenses: 0 };
      agg.income += v.income;
      agg.expenses += v.expenses;
      byMonth.set(key, agg);
    }

    const line = [...byMonth.values()]
      .sort((a, b) => a.sortKey.localeCompare(b.sortKey))
      .map<LinePoint>((v) => ({
        date: v.label,
        income: v.income,
        expenses: v.expenses,
        savings: v.income - v.expenses,
      }));

    return { line, incomePie, expensePie };
  }

  // years
  const byYear = new Map<string, { income: number; expenses: number }>();
  for (const [iso, v] of byDay.entries()) {
    const { key } = getBucket(iso, "years");
    const agg = byYear.get(key) ?? { income: 0, expenses: 0 };
    agg.income += v.income;
    agg.expenses += v.expenses;
    byYear.set(key, agg);
  }

  const line = [...byYear.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map<LinePoint>(([year, v]) => ({
      date: year,
      income: v.income,
      expenses: v.expenses,
      savings: v.income - v.expenses,
    }));

  return { line, incomePie, expensePie };
}

