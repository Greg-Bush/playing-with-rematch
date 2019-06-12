export interface IGeolocation {
    longitude: number; // долгота
    latitude: number; // широта;
    zoom: number; // масштаб (если доступен)
    city: string; // название города;
    region: string; // название региона;
    country: string; // название страны.
}
interface IGeoApi {
    ready: any;
    geolocation: IGeolocation;
}
export default new class yaMapsGeoApi {
    private get yMaps() {
        return (window as any).ymaps as IGeoApi;
    }
    public async init() {
        if (this.yMaps.geolocation) {
            return Promise.resolve(this.yMaps);
        } else {
            return new Promise<IGeoApi>(resolve => {
                this.yMaps.ready(() => resolve(this.yMaps));
            });
        }
    }
}