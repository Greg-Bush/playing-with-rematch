import weather from 'openweather-apis';

interface ICoordinates {
    longitude: number;
    latitude: number;
}

export default new class Weather {
    constructor() {
        weather.setLang('en');
        weather.setAPPID('02968f80c1d0b3d2605c6a54bff6e814');
    }
    public async init(coordinates: ICoordinates) {
        weather.setCoordinate(coordinates.latitude, coordinates.longitude);
        return new Promise<any>((resolve, reject) => {
            weather.getAllWeather(function (err: string, JSONObj: any) {
                if (JSONObj) {
                    resolve(JSONObj);
                } else {
                    reject(err);
                }
            });
        })
    }
}
