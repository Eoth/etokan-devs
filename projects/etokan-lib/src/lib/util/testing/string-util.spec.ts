import { StringU, StringJoiner } from "../string-util";

describe('StringU', () => {

    it('isEquals should return true', ()=> {
        expect(StringU.isEquals('toto', 'toto')).toBeTrue();
    })

    it('isEquals should return false', ()=> {
        expect(StringU.isEquals('toto', 'totos')).toBeFalse();
    })

    it('isBlank should return true', ()=> {
        expect(StringU.isBlank(' ')).toBeTrue();
    })

    it('isBlank should return false', ()=> {
        expect(StringU.isBlank('toto')).toBeFalse();
    })

    it('isNotBlank should return true', ()=> {
        expect(StringU.isNotBlank('toto')).toBeTrue();
    })

    it('isNotBlank should return false', ()=> {
        expect(StringU.isNotBlank(' ')).toBeFalse();
    })

});

describe('StringJoiner', () => {

    function joiner(): StringJoiner {
        const joiner = new StringJoiner('_', '[', ']');
        joiner.addValue('achraf');
        joiner.addValues('hakimi', 'is', 'goat');
        return joiner;
    }

    const value = joiner();

    it('hasContent should returN TRUE', () => {
        expect(value.hasContent()).toBeTrue();
    });

    it('should join values', () => {
        expect(value.toString()).toEqual('[achraf_hakimi_is_goat]');
    });

})