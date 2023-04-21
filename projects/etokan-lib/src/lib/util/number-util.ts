const numberRegExp = /^(\d+|\d+[,.]|[,.]\d+|\d+[,.]\d+)$/
/**
 * Space to number Util
 */
export class NumberU {

    /**
     * Check String is number format
     * 
     * @param value 
     * @returns 
     */
    static isNumber(value: string): boolean {
        return numberRegExp.test(value);
    }

    /**
     * string to number
     * 
     * @param value 
     * @returns 
     */
    static toNumber(value: string): number {
        return Number(value.replace(',', '.'));
    }

}