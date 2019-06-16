import { init, Models, ModelConfig } from '@rematch/core';
import { weather } from './models';

export class RematchModels implements Models {
  [key: string]: ModelConfig;
  weather = weather;
}

const store = init({
  models: new RematchModels()
});

export default store;