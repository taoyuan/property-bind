# property-bind

> A property binding utility for binding and unbinding property value

## Usage

`socket.ts`

```ts
export class Socket {
  onclose: () => void;
  onmessage: (message: string) => void;
  onopen: () => void;
}
```

### `bind` one property

```ts
import {bind} from 'property-bind';

const socket = new Socket();

const unbind = bind(socket, 'onmessage', message => {});

// after all done
unbind();
```

### `Binder` for multiple properties

```ts
import {Binder} from 'property-bind';

const socket = new Socket();

const binder = Binder.for(socket)
  .bind('onmessage', message => {})
  .bind('onclose', () => {});

// after all done
// unbind all
binder.unbind();

// unbind exact properties
binder.unbind('onmessage', 'onclose');
```
