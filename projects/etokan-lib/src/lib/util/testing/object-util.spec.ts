import { ObjectU } from "../object-util";

interface Goat {
    achraf: string;
}

describe('ObjectU', () => {

    const goat: Goat = { achraf: 'hakimi' }
    const noob: Goat | undefined = undefined;

    it('exist should return false', () => {
        expect(ObjectU.exist(noob)).toBeFalsy();
    });

    it('exist should return true', () => {
        expect(ObjectU.exist(goat)).toBeTruthy();
    });

    it('orElse should return other', () => {
        expect(ObjectU.orElse(noob, goat)).toBe(goat);
    });

    it('orElse should return primary', () => {
        expect(ObjectU.orElse(goat, { achraf: 'other' })).toBe(goat);
    });

    it('oppositeIfExist should return true', () => {
        expect(ObjectU.oppositeIfExist(false)).toBeTrue();
    });

    it('oppositeIfExist should return undefinde', () => {
        expect(ObjectU.oppositeIfExist(undefined)).toBeUndefined();
    });

    it('getValueOn should return hakimi', () => {
        goat.achraf = 'hakimi';
        expect(ObjectU.getValueOn(goat, 'achraf')).toEqual('hakimi');
    });

    it('getValueOn should return undefined', () => {
        expect(ObjectU.getValueOn(goat, 'none')).toBeUndefined();
    });

    it('setValueOn should set value on', () => {
        ObjectU.setValueOn(goat, 'achraf', 'testSetValue');
        expect(goat.achraf).toEqual('testSetValue');
    });
})