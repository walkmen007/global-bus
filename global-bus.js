// event-bus.ts
import { Subject } from 'rxjs';

class GlobalEventBus {
  private events: { [key: string]: Subject<any> } = {};

  emit(event: string, data: any): void {
    console.log("Emit Event------MFE1", event)
    if (!this.events[event]) {
      this.events[event] = new Subject();
    }
    this.events[event].next(data);
  }

  on(event: string): Subject<any> {
    console.log("Get Event-----MFE1", event)
    if (!this.events[event]) {
      this.events[event] = new Subject();
    }
    return this.events[event];
  }
}


(window as any).globalEventBus = new GlobalEventBus();
