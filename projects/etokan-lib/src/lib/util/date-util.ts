
export enum Interval {
    YEARS, MONTHS, WEEKS, DAYS, HOURS, MINUTES, SECONDS
}

export class DateU {

    /**
     * Difference between 2 dates&
     * 
     * @param date1 
     * @param date2 
     * @param interval 
     * @returns 
     */
    static diff(date1: Date, date2: Date, interval: Interval): number | undefined {
        return intervalDiffFunctionMap.get(interval)?.(date2, date1);
    }

    /**
     * 
     * @param date 
     * @param nb 
     * @param interval 
     * @returns 
     */
    static add(date: Date, nb: number, interval: Interval): Date | undefined {
        return intervalAddFunctionMap.get(interval)?.(date, nb);
    }

}

const intervalDiffFunctionMap: Map<Interval, DiffFunction> = new Map([
    [Interval.YEARS, yearsBetween],
    [Interval.MONTHS, monthsBetween],
    [Interval.WEEKS, weeksBetween],
    [Interval.DAYS, daysBetween],
    [Interval.HOURS, hoursBetween],
    [Interval.MINUTES, minutesBetween],
    [Interval.SECONDS, secondsBetween]
]);

const intervalAddFunctionMap: Map<Interval, AddFunction> = new Map([
    [Interval.YEARS, addYears],
    [Interval.MONTHS, addMonths],
    [Interval.WEEKS, addWeeks],
    [Interval.DAYS, addDays],
    [Interval.HOURS, addHours],
    [Interval.MINUTES, addMinutes],
    [Interval.SECONDS, addSeconds]
]);

type DiffFunction = (date2: Date, date1: Date) => number;
type AddFunction = (date: Date, nb: number) => Date;

const timediff = (date2: Date, date1: Date): number => { return date2.valueOf() - date1.valueOf() }

const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24, week = day * 7;

function yearsBetween(date2: Date, date1: Date): number {
    return date2.getFullYear() - date1.getFullYear();
}

function monthsBetween(date2: Date, date1: Date): number {
    return (date2.getFullYear() * 12 + date2.getMonth()) - (date1.getFullYear() * 12 + date1.getMonth());
}

function weeksBetween(date2: Date, date1: Date): number {
    return Math.floor(timediff(date2, date1) / week);
}

function daysBetween(date2: Date, date1: Date): number {
    return Math.floor(timediff(date2, date1) / day);
}

function hoursBetween(date2: Date, date1: Date): number {
    return Math.floor(timediff(date2, date1) / hour);
}

function minutesBetween(date2: Date, date1: Date): number {
    return Math.floor(timediff(date2, date1) / minute);
}

function secondsBetween(date2: Date, date1: Date): number {
    return Math.floor(timediff(date2, date1) / second);
}

function addYears(date: Date, nb: number): Date {
    date.setFullYear(date.getFullYear() + nb);
    return date;
}

function addMonths(date: Date, nb: number): Date {
    date.setMonth(date.getMonth() + nb);
    return date;
}

function addWeeks(date: Date, nb: number): Date {
    date.setDate(date.getDate() + nb * 7);
    return date;
}

function addDays(date: Date, nb: number): Date {
    date.setDate(date.getDate() + nb);
    return date;
}

function addHours(date: Date, nb: number): Date {
    date.setHours(date.getHours() + nb);
    return date;
}

function addMinutes(date: Date, nb: number): Date {
    date.setMinutes(date.getMinutes() + nb);
    return date;
}

function addSeconds(date: Date, nb: number): Date {
    date.setSeconds(date.getSeconds() + nb);
    return date;
}
