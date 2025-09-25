// components/UserFiltersBtn.tsx
"use client";

import { FC, useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon, X } from "lucide-react";
import classes from './UserFiltersBtn/UserFiltersBtn.module.css'

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { COLORS, SIZES } from "@/styled/theme";

type UserFiltersBtnProps = {
  title: string;
  filters: string[];         // оставил проп, вдруг используешь где-то ещё
  choosenfilter: string;     // плейсхолдер, если даты не выбраны
  className?: string;
  defaultRange?: DateRange;
  onChangeRange?: (range: DateRange | undefined) => void;
};

function normalizeRange(range: DateRange | undefined): DateRange | undefined {
  if (!range?.from && !range?.to) return undefined;
  if (range?.from && range?.to && range.to < range.from) {
    return { from: range.to, to: range.from };
  }
  return range;
}

export const DateRangeButton: FC<UserFiltersBtnProps> = ({
  title,
  filters,
  choosenfilter,
  className,
  defaultRange,
  onChangeRange,
}) => {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<DateRange | undefined>(
    normalizeRange(defaultRange)
  );

  const label = useMemo(() => {
    if (range?.from && range?.to) {
      return `${format(range.from, "dd MMM yyyy", { locale: ru })} — ${format(
        range.to,
        "dd MMM yyyy",
        { locale: ru }
      )}`;
    }
    if (range?.from) {
      return `${format(range.from, "dd MMM yyyy", { locale: ru })} …`;
    }
    return choosenfilter || "Выбрать период";
  }, [range, choosenfilter]);

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = undefined;
    setRange(next);
    onChangeRange?.(next);
  };

  return (
    <div className={cn('', classes.UserFilterBtn)}>
      <div
        className="p-0.5 absolute left-4 top-1 z-10"
         style={{fontSize: SIZES.fontSizeSmall_3, backgroundColor: COLORS.mainBGColor}}
      >
        {title}
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              // единый стиль:
              "h-9.8 justify-start text-left font-normal hover:bg-transparent hover:text-inherit",
              "border-2 border-[#D8CDCD] rounded-lg",
              !range?.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span className="truncate">{label}</span>
            {range?.from || range?.to ? (
              <X
                className="ml-2 h-4 w-4 shrink-0"
                onClick={clear}
              />
            ) : null}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={8}
          className="w-auto p-0 overflow-hidden"
        >
          <Calendar
            initialFocus
            mode="range"
            numberOfMonths={1}   // по твоему требованию: один месяц на десктопе
            selected={range}
            onSelect={(r) => {
              const next = normalizeRange(r);
              setRange(next);
              onChangeRange?.(next);
            }}
            weekStartsOn={1}
            locale={ru}
          />
          <div className="flex items-center justify-end gap-2 border-t p-2">
            <Button variant="ghost" onClick={() => { setRange(undefined); onChangeRange?.(undefined); }}>
              Сбросить
            </Button>
            <Button onClick={() => setOpen(false)}>Готово</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
