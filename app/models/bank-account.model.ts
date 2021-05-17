import Model, { attr } from '@ember-data/model';

export default class BankAccountModel extends Model {
  @attr()
  public declare name: string;

  @attr('number', { defaultValue: 0 })
  public declare value: number;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'bank-account': BankAccountModel;
  }
}
