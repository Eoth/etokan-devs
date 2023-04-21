import { DateU, Interval } from "../date-util";


describe('DateU', () => {
    it('diff YEARS', () => {
        const date1 = new Date('01/01/2022');
        const date2 = new Date('01/01/2023');
        expect(DateU.diff(date1, date2, Interval.YEARS)).toEqual(1);
    });

    it('diff MONTHS', () => {
        const date1 = new Date('2023-01-01T00:00:00.000Z');
        const date2 = new Date('2023-03-01T00:00:00.000Z');
        expect(DateU.diff(date1, date2, Interval.MONTHS)).toEqual(2);
    });

    it('diff WEEKS', () => {
        const date1 = new Date('2023-01-02T00:00:00.000Z');
        const date2 = new Date('2023-01-16T00:00:00.000Z');
        expect(DateU.diff(date1, date2, Interval.WEEKS)).toEqual(2);
    });

    it('diff DAYS', () => {
        const date1 = new Date('2023-01-01T00:00:00.000Z');
        const date2 = new Date('2023-01-03T00:00:00.000Z');
        expect(DateU.diff(date1, date2, Interval.DAYS)).toEqual(2);
    });

    it('diff HOURS', () => {
        const date1 = new Date('2023-01-01T12:00:00.000Z');
        const date2 = new Date('2023-01-01T24:00:00.000Z');
        expect(DateU.diff(date1, date2, Interval.HOURS)).toEqual(12);
    });

    it('diff MINUTES', () => {
        const date1 = new Date('2023-01-01T12:00:00.000Z');
        const date2 = new Date('2023-01-01T24:00:00.000Z');
        expect(DateU.diff(date1, date2, Interval.MINUTES)).toEqual(720);
    });

    it('diff SECONDES', () => {
        const date1 = new Date('2023-01-01T12:00:00.000Z');
        const date2 = new Date('2023-01-01T24:00:00.000Z');
        expect(DateU.diff(date1, date2, Interval.SECONDS)).toEqual(43200);
    });

    it('add YEARS', () => {
        const date = new Date('2022-12-01T12:00:00.000Z');
        const expected = new Date('2023-12-01T12:00:00.000Z');
        expect(DateU.add(date, 1, Interval.YEARS)).toEqual(expected);
    });

    it('add MONTHS', () => {
        const date = new Date('2022-12-01T12:00:00.000Z');
        const expected = new Date('2023-01-01T12:00:00.000Z');
        expect(DateU.add(date, 1, Interval.MONTHS)).toEqual(expected);
    });

    it('add WEEKS', () => {
        const date = new Date('2023-01-02T00:00:00.000Z');
        const expected = new Date('2023-01-16T00:00:00.000Z');
        expect(DateU.add(date, 2, Interval.WEEKS)).toEqual(expected);
    });

    it('add DAYS', () => {
        const date = new Date('2023-01-02T00:00:00.000Z');
        const expected = new Date('2023-01-01T00:00:00.000Z');
        expect(DateU.add(date, -1, Interval.DAYS)).toEqual(expected);
    });

    it('add HOURS', () => {
        const date = new Date('2023-01-02T00:00:00.000Z');
        const expected = new Date('2023-01-16T00:00:00.000Z');
        expect(DateU.add(date, 336, Interval.HOURS)).toEqual(expected);
    });

    it('add MINUTES', () => {
        const date = new Date('2023-01-02T00:00:00.000Z');
        const expected = new Date('2023-01-16T00:00:00.000Z');
        expect(DateU.add(date, 20160, Interval.MINUTES)).toEqual(expected);
    });

    it('add SECONDS', () => {
        const date = new Date('2023-01-02T00:00:00.000Z');
        const expected = new Date('2023-01-16T00:00:00.000Z');
        expect(DateU.add(date, 1209600, Interval.SECONDS)).toEqual(expected);
    });
});