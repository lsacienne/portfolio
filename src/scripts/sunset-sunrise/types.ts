import { KeyTypeConverter } from "../utils";

// Source - https://stackoverflow.com/a/68526558
// Posted by Patiu Dan, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-19, License - CC BY-SA 4.0
export type D1 = 0 | 1;
export type D2 = D1 | 2;
export type D3 = D2 | 3;
export type D5 = D3 | 4 | 5;
export type D9 = D5 | 6 | 7 | 8 | 9;

type Day = `${D1}${D9}`;
type Month = `${D1}${D2}`;
type Year = `${D9}${D9}${D9}${D9}`;

export interface DateString {
  year: Year;
  month: Month;
  day: Day;
}

function isDateString(date: Date | DateString): date is DateString {
  return (
    Object.hasOwn(date, "year") &&
    Object.hasOwn(date, "month") &&
    Object.hasOwn(date, "day")
  );
}

export class DateKeyTypeConverter extends KeyTypeConverter<Date | DateString> {
  keyToString(key: DateString | Date): string {
    if (isDateString(key)) {
      return `${key.year}-${key.month}-${key.day}`;
    }
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
      .format(key)
      .replace(/\//g, "-");
  }
}
