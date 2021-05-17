import Route from '@ember/routing/route';

export default class One extends Route {
  beforeModel(): void {
    this.transitionTo('one');
  }
}
