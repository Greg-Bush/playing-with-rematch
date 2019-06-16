import yaMapsGeoApi from './providers/yandex/geolocation';
import weather from './providers/openweathermap';

export interface IGeolocation {
    longitude: number; // долгота
    latitude: number; // широта;
    zoom: number; // масштаб (если доступен)
    city: string; // название города;
    region: string; // название региона;
    country: string; // название страны.
}
export async function fetchGeolocation(): Promise<IGeolocation> {
    const result = await yaMapsGeoApi.init();
    return result.geolocation;
}

export async function fetchWeather() {
    const geo = await fetchGeolocation();
    return await weather.init(geo);
}