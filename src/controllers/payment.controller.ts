import { Request, Response } from "express"
import type { CreatePaymentDto, PaymentDto } from "../dto/payment.dto.js"
import { emitPaymentReceived } from "../events/loan.events.js"

export class PaymentController {
  async makePayment(req: Request<{ loanId: string }, PaymentDto, CreatePaymentDto>, res: Response<PaymentDto>): Promise<void> {
    const { loanId } = req.params
    const paymentId = "generated-payment-id"

    emitPaymentReceived(loanId, paymentId, req.body.amount)

    res.status(201).json({} as any)
  }

  async listPayments(req: Request<{ loanId: string }>, res: Response<PaymentDto[]>): Promise<void> {
    res.json([])
  }

  async getPayment(req: Request<{ loanId: string; paymentId: string }>, res: Response<PaymentDto>): Promise<void> {
    res.status(404).json({} as any)
  }
}
