import {UnbindFn} from './types';
import {bind} from './bind';

export class Binder<T extends object> {
  protected bindings: Record<any, UnbindFn> = {};

  static for<T extends object>(target: T) {
    return new Binder(target);
  }

  constructor(public target: T) {}

  bind<P extends keyof T>(property: P, value: T[P]): this {
    this.bindings[property] = bind(this.target, property, value);
    return this;
  }

  unbind(...properties: (keyof T)[]) {
    if (properties?.length) {
      for (const p of properties) {
        if (this.bindings[p]) {
          this.bindings[p]?.();
          delete this.bindings[p];
        }
      }
    } else {
      for (const p of Object.keys(this.bindings)) {
        this.bindings[p]();
      }
      this.bindings = {};
    }
  }
}
