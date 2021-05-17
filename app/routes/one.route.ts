import Route from '@ember/routing/route';

export default class OneRoute extends Route {
  beforeModel(): void {
    this.transitionTo('one.route.ts');
  }
}
