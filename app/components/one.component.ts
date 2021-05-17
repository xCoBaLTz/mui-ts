import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import CounterService from 'mui-ts/services/counter.service';

export default class OneComponent extends Component {
  @tracked
  public count: number = 0;

  @service
  declare counter: CounterService;

  @action
  public increase(): void {
    this.count = this.counter.increase(this.count);
  }

  @action
  public decrease(): void {
    this.count = this.counter.decrease(this.count);
  }
}
