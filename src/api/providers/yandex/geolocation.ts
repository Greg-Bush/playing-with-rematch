import onDomReady from 'domready';
import { IGeolocation } from '../../index';

interface IGeoApi {
    ready: any;
    geolocation: IGeolocation;
}
export default new class yaMapsGeoApi {
    private get yMaps() {
        return (window as any).ymaps as IGeoApi;
    }
    public async init() {
        if (!this.yMaps) {
            return new Promise<IGeoApi>(resolve => {
                onDomReady(() => {
                    resolve(this.init());
                });
            });
        }
        if (this.yMaps.geolocation) {
            return Promise.resolve(this.yMaps);
        } else {
            return new Promise<IGeoApi>(resolve => {
                this.yMaps.ready(() => resolve(this.yMaps));
            });
        }
    }
}