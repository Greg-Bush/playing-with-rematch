import yaMapsGeoApi, { IGeolocation } from './providers/yaMapsGeoApi';

export async function fetch(): Promise<IGeolocation> {
    return new Promise<IGeolocation>(resolve => {
        yaMapsGeoApi.init().then(geoApi => resolve(geoApi.geolocation));
    });
}