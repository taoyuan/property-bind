import {Socket} from './mocks/socket';
import {Binder} from '../binder';

describe('binder', function () {
  it('should bind multiple properties', function () {
    const onmessage = jest.fn();
    const onclose = jest.fn();

    const socket = new Socket();
    Binder.for(socket).bind('onmessage', onmessage).bind('onclose', onclose);

    expect(socket.onmessage).toEqual(onmessage);
    expect(socket.onclose).toEqual(onclose);
  });

  it('should unbind multiple properties', function () {
    const onmessage = jest.fn();
    const onclose = jest.fn();

    const socket = new Socket();
    const binder = Binder.for(socket).bind('onmessage', onmessage).bind('onclose', onclose);

    expect(socket.onmessage).toEqual(onmessage);
    expect(socket.onclose).toEqual(onclose);

    binder.unbind();

    expect(socket.onmessage).toBeUndefined();
    expect(socket.onclose).toBeUndefined();
  });
});
