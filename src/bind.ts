import {UnbindFn} from './types';

export function bind<T extends object, P extends keyof T>(target: T, property: P, value: T[P]): UnbindFn {
  const originalValue = target[property];
  target[property] = value;

  return function unbind() {
    target[property] = originalValue;
  };
}
