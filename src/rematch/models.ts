import { ModelConfig, RematchDispatch } from '@rematch/core';
import { RematchModels } from './index';
import { fetchWeather } from '../api/index';

export const weather: ModelConfig<any> = {
    state: null,
    reducers: {
        updateState(state, payload: any) {
            return { ...state, ...payload };
        }
    },
    effects: (dispatch: RematchDispatch<RematchModels>) => ({
        async fetchAsync() {
            const result = await fetchWeather();
            dispatch.weather.updateState(result);
        }
    })
};