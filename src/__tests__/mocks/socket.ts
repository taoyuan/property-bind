export class Socket {
  onclose: () => void;
  onmessage: (message: string) => void;
  onopen: () => void;
}
