// mainPlotProps = { date: string; income: number; expenses: number; savings: number }
// date ДОЛЖНА быть в формате 'YYYY-MM-DD'
import { Operation } from "@/interfaces/interfaces";

type ISO = `${number}-${number}-${number}`;

function rightFloorIndex(arr: ISO[], target: ISO): number {
  // максимальный индекс с значением <= target
  let lo = 0, hi = arr.length - 1, ans = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] <= target) { ans = mid; lo = mid + 1; }
    else { hi = mid - 1; }
  }
  return ans;
}

function leftCeilIndex(arr: ISO[], target: ISO): number {
  // минимальный индекс с значением >= target
  let lo = 0, hi = arr.length - 1, ans = arr.length;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] >= target) { ans = mid; hi = mid - 1; }
    else { lo = mid + 1; }
  }
  return ans;
}

export function useSliceOperation(
  data: Operation[],
  period: [ISO, ISO] | ISO[]
): Operation[] {
  if (!Array.isArray(data) || data.length === 0) return [];
  if (!Array.isArray(period) || period.length < 2) {
    return data
  }

  // нормализуем порядок границ
  let [startISO, endISO] = period as [ISO, ISO];
  if (startISO > endISO) [startISO, endISO] = [endISO, startISO];

  // сортируем копию по ISO-дате
  const sorted = [...data].sort((a, b) => a.date.localeCompare(b.date));
  const dates: ISO[] = sorted.map(d => d.date as ISO);

  // границы: старт — ближайшая дата вниз (floor), конец — вверх (ceil)
  let startIdx = rightFloorIndex(dates, startISO);
  let endIdx   = leftCeilIndex(dates, endISO);

  // если все даты > start → берём первую
  if (startIdx === -1) startIdx = 0;
  // если все даты < end → берём последнюю
  if (endIdx === dates.length) endIdx = dates.length - 1;

  // если диапазон не пересекается
  if (startIdx > endIdx) return [];

  return sorted.slice(startIdx, endIdx + 1);
}
