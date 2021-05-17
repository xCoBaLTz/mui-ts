import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import CounterService from 'mui-ts/services/counter.service';

export default class OneComponent extends Component {
  @tracked
  public count: number = 0;

  @service
  private _counter: CounterService;

  constructor(counter: CounterService) {
    super({}, counter);
    this._counter = counter;
  }

  @action
  public increase(): void {
    this.count = this._counter.increase(this.count);
  }

  @action
  public decrease(): void {
    this.count = this._counter.decrease(this.count);
  }
}
