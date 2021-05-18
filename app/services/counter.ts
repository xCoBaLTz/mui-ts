import Service from '@ember/service';

export default class Counter extends Service {
  increase(value: number): number {
    return value === 20 ? value : value + 1;
  }

  decrease(value: number): number {
    return value === 0 ? value : value - 1;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    counter: Counter;
  }
}
