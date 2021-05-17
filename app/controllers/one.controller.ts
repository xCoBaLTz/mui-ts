import Controller from '@ember/controller';
import { ModelFrom } from '../lib/type-utils';
import OneRoute from '../routes/one.route';

export default class OneController extends Controller {
  declare model: ModelFrom<OneRoute>;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    one: OneController;
  }
}
