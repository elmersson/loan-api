export class EventBus {
  publish(event: object): void {
    // Stub — in production this would go to a message queue
    console.log(`Event published: ${event.constructor.name}`)
  }

  emit(eventName: string, payload: object): void {
    // Stub — string-based event emission
    console.log(`Event emitted: ${eventName}`, payload)
  }
}

export const eventBus = new EventBus()
