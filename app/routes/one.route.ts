import Route from '@ember/routing/route';
import Store from '@ember-data/store';
import { inject as service } from '@ember/service';
import BankAccountModel from 'mui-ts/models/bank-account.model';
import DS from 'ember-data';

export default class OneRoute extends Route {
  @service
  declare store: Store;

  model(): DS.PromiseArray<BankAccountModel> {
    return this.store.findAll('bank-account');
  }
}
