import { NumberU } from "../number-util";

describe('NumberU', () => {

    it('isNumber case is true', () => {
        expect(NumberU.isNumber('12,5')).toBeTrue();
    });

    it('isNumber case is false', () => {
        expect(NumberU.isNumber('12,,5')).toBeFalse();
    });

    it('toNumber', () => {
        expect(NumberU.toNumber('5,45')).toBe(5.45);
    });
});