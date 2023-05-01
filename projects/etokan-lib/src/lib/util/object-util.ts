import { Bean, PropertyRecord } from "./custom-type";

/**
 * Space to Object Util
 */
export class ObjectU {

    /**
     * Check If value is not null or not undefined
     * 
     * @param value to check
     * @returns true if exist
     */
    static exist<T>(value: T | undefined): value is NonNullable<T> {
        return exist(value);
    }

    /**
     * Return primary if exist other else
     * very useful to retrieve the value of a boolean for example
     * 
     * the "??" operator can be useful for other types
     * 
     * @param primary 
     * @param other 
     * @returns 
     */
    static orElse<T>(primary: T | undefined, other: T): T {
        return exist(primary) ? primary : other;
    }

    /**
     * return opposite of boolean value if exist
     * 
     * @param value 
     * @returns 
     */
    static oppositeIfExist(value: boolean | undefined): boolean | undefined {
        return exist(value) ? !value : value;
    }

    /**
     * get field value on object
     * 
     * @param object 
     * @param fieldName 
     * @returns 
     */
    static getValueOn<T extends object>(bean: T, fieldName: string): unknown {
        return (bean as Bean)[fieldName];
    }

    /**
     * set field value on object
     * 
     * @param object for operation
     * @param fieldName to set value
     * @param value value to set
     */
    static setValueOn<T extends object>(bean: T, fieldName: string, value: unknown): void {
        (bean as Bean)[fieldName] = value;
    }

    /**
     * string array to object as key value
     * 
     * @param array 
     * @returns 
     */
    static toKeyValue(array: Array<string>): { [K in string]: K } {
        return array.reduce((res, key: string) => {
            (res as Bean)[key] = key;
            return res;
        }, {});
    }

    /**
     * get All Properties record on object
     * 
     * @param instance instance of object
     * @returns 
     */
    static getPropertiesRecordOn<T extends object>(instance: T): PropertyRecord<T> {
        return this.toKeyValue(Object.keys(instance)) as PropertyRecord<T>;
    }

}

function exist<T>(value: T | undefined): value is NonNullable<T> {
    return value !== undefined && value !== null;
}