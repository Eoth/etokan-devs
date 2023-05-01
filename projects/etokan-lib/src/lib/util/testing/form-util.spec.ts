import { FormU, Optional } from "../form-util";

class Test {
    firstName: string | undefined = undefined;
    lastName: string | undefined = undefined;
    email: string | undefined = undefined;
    age: number | undefined = undefined;
    isStudent: boolean | undefined = undefined;
}

function feedTest(): Test {
    const test = new Test();
    test.firstName = 'alexis';
    test.lastName = 'sanchez';
    test.age = 35;
    test.isStudent = false;
    test.email = 'alexis.sanchez@gmail.com';
    return test;
}

describe('Form Util test', () => {

    const test = feedTest();

    it('toformGroup include only some fields', () => {
        const fromGroup = FormU.createFormGroupFrom(
            Test, new Optional(test, { fieldsNames: ['age', 'isStudent'], operator: 'INCLUDE' })
        );
        expect(fromGroup.getRawValue()).toEqual({ age: 35, isStudent: false });
    });

    it('toformGroup exclude only some fields', () => {
        const fromGroup = FormU.createFormGroupFrom(
            Test, new Optional(test, { fieldsNames: ['age', 'isStudent'], operator: 'EXCLUDE' })
        );
        expect(fromGroup.getRawValue()).toEqual({ firstName: 'alexis', lastName: 'sanchez', email: 'alexis.sanchez@gmail.com' });
    });

    it('toformGroup should create form with all fields', () => {
        const fromGroup = FormU.createFormGroupFrom(Test);
        expect(fromGroup.getRawValue()).toEqual({ firstName: null, lastName: null, email: null, age: null, isStudent: null });
    });

    it('toformGroup create some fields with no required validator, form valid', () => {
        const fromGroup = FormU.createFormGroupFrom(
            Test, new Optional(undefined, undefined, ['firstName', 'email', 'isStudent'])
        );
        fromGroup.get('lastName')?.patchValue('NAKO');
        fromGroup.get('age')?.patchValue(15);
        expect(fromGroup.getRawValue()).toEqual({ lastName: 'NAKO', age: 15, firstName: null, email: null, isStudent: null });
        expect(fromGroup.valid).toBeTrue();
    });

    it('toformGroup create some fields with no required validator, form invalid', () => {
        const fromGroup = FormU.createFormGroupFrom(
            Test
        );
        expect(fromGroup.getRawValue()).toEqual({ lastName: null, age: null, firstName: null, email: null, isStudent: null });
        expect(fromGroup.invalid).toBeTrue();
    });
})
