import {Socket} from './mocks/socket';
import {bind} from '../bind';

describe('bind', function () {
  it('should bind a property', function () {
    const original = jest.fn();
    const onmessage = jest.fn();

    const socket = new Socket();
    socket.onmessage = original;

    bind(socket, 'onmessage', onmessage);
    socket.onmessage('hello');
    expect(original).not.toHaveBeenCalled();
    expect(onmessage).toHaveBeenCalledTimes(1);
  });

  it('should unbind a property', function () {
    const original = jest.fn();
    const onmessage = jest.fn();

    const socket = new Socket();
    socket.onmessage = original;

    const unbind = bind(socket, 'onmessage', onmessage);
    socket.onmessage('hello');
    expect(original).not.toHaveBeenCalled();
    expect(onmessage).toHaveBeenCalledTimes(1);

    onmessage.mockClear();
    unbind();
    socket.onmessage('world');
    expect(original).toHaveBeenCalledTimes(1);
    expect(onmessage).not.toHaveBeenCalled();
  });
});
