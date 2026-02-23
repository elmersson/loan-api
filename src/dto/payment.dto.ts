import { PaymentMethod, PaymentStatus } from "../models/enums.js"

export interface CreatePaymentDto {
  amount: number
  method: PaymentMethod
  reference?: string
}

export interface PaymentDto {
  id: string
  loanId: string
  amount: number
  method: PaymentMethod
  status: PaymentStatus
  processedAt: string
  reference?: string
}

export type PaymentSummaryDto = {
  totalPaid: number
  remainingBalance: number
  nextPaymentDue: string
  paymentCount: number
}
