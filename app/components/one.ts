import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Counter from 'mui-ts/services/counter';
import { inject as service } from '@ember/service';

export default class One extends Component {
  @tracked
  count: number = 0;

  @service
  declare counter: Counter;

  @action
  increase(): void {
    this.count = this.counter.increase(this.count);
  }

  @action
  decrease(): void {
    this.count = this.counter.decrease(this.count);
  }
}
