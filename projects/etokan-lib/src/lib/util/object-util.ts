
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

}

function exist<T>(value: T | undefined): value is NonNullable<T> {
    return value !== undefined && value !== null;
}

type Bean = Record<string, unknown>;

