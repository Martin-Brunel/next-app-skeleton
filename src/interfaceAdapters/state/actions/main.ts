export enum MainType {
    GET_DATA = "GET_DATA"
}

export const getData = () => ({
    type: MainType.GET_DATA
})
