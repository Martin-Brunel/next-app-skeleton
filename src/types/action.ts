export interface AnyAction<T> {
    type: T;
    [extraProps: string]: any;
}