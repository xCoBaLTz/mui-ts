import Service from '@ember/service';

export default class Counter extends Service {
  public increase(value: number): number {
    if (value == 100) {
      return value;
    } else {
      return value + 1;
    }
  }

  public decrease(value: number): number {
    if (value == 0) {
      return value;
    } else {
      return value - 1;
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    counter: Counter;
  }
}
