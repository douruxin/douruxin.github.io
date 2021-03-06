export class EventBus {
  constructor() {
    this.eventMap = new Map();
  }

  on(key, cb) {
    let handlers = this.eventMap.get(key);
    if (!handlers) {
      handlers = [];
    }
    handlers.push(cb);
    this.eventMap.set(key, handlers);
  }

  off(key, cb) {
    const handlers = this.eventMap.get(key);
    if (!handlers) return;
    if (cb) {
      const idx = handlers.indexOf(cb);
      if (idx > -1) {
        handlers.splice(idx, 1);
      }
      this.eventMap.set(key, handlers);
    } else {
      this.eventMap.delete(key);
    }
  }

  once(key, cb) {
    const handlers = [
      (payload) => {
        cb(payload);
        this.off(key);
      },
    ];
    this.eventMap.set(key, handlers);
  }

  emit(key, payload) {
    const handlers = this.eventMap.get(key);
    if (!Array.isArray(handlers)) return;
    handlers.forEach((handler) => {
      handler(payload);
    });
  }
}
