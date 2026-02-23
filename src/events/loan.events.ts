import { eventBus } from "./event-bus.js"

// Event classes
export class LoanCreatedEvent {
  constructor(
    public readonly loanId: string,
    public readonly applicantName: string,
    public readonly amount: number,
  ) {}
}

export class LoanApprovedEvent {
  constructor(
    public readonly loanId: string,
    public readonly interestRate: number,
  ) {}
}

export class LoanRejectedEvent {
  constructor(
    public readonly loanId: string,
    public readonly reason: string,
  ) {}
}

export class PaymentReceivedEvent {
  constructor(
    public readonly loanId: string,
    public readonly paymentId: string,
    public readonly amount: number,
  ) {}
}

// Pattern 1: Publish with new EventClass()
export function publishLoanCreated(loanId: string, name: string, amount: number) {
  eventBus.publish(new LoanCreatedEvent(loanId, name, amount))
}

export function publishLoanApproved(loanId: string, rate: number) {
  eventBus.publish(new LoanApprovedEvent(loanId, rate))
}

export function publishLoanRejected(loanId: string, reason: string) {
  eventBus.publish(new LoanRejectedEvent(loanId, reason))
}

// Pattern 2: Emit with string event name
export function emitPaymentReceived(loanId: string, paymentId: string, amount: number) {
  eventBus.emit("payment.received", { loanId, paymentId, amount })
}
