import Model from '@ember-data/model';

export default class BankAccount extends Model {}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'bank-account': BankAccount;
  }
}
