/** types */
export type Class<T> = new (...args: any) => T;
export type Bean = Record<string, any>;
export type AuthorizeNumberEnum = Record<number | string, any | unknown>;
export type PropertyRecord<T extends object> = Record<keyof T, string>;
export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
export type Function1<T, R> = (value: T) => R;