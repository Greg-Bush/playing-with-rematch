interface ICity {
    name: string;
}
export const city = {
    state: null as ICity,
    reducers: {
        setCityName(state: ICity, name: string) {
            return { ...state, name };
        }
    }
}