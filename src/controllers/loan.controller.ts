import { Request, Response } from "express"
import type { LoanApplicationDto, LoanResultDto, LoanDetailDto, UpdateLoanDto } from "../dto/loan.dto.js"
import { publishLoanCreated, publishLoanApproved, publishLoanRejected } from "../events/loan.events.js"

export class LoanController {
  async listLoans(req: Request, res: Response<LoanDetailDto[]>): Promise<void> {
    // Stub implementation
    res.json([])
  }

  async applyForLoan(req: Request<{}, LoanResultDto, LoanApplicationDto>, res: Response<LoanResultDto>): Promise<void> {
    const dto = req.body
    const loanId = "generated-id"

    publishLoanCreated(loanId, dto.applicantName, dto.amount)

    // Stub: always approve
    publishLoanApproved(loanId, 5.5)

    res.status(201).json({
      approved: true,
      loanId,
      interestRate: 5.5,
      monthlyPayment: dto.amount / dto.termMonths,
    })
  }

  async getLoanById(req: Request<{ id: string }>, res: Response<LoanDetailDto>): Promise<void> {
    res.status(404).json({} as any)
  }

  async updateLoan(req: Request<{ id: string }, LoanDetailDto, UpdateLoanDto>, res: Response<LoanDetailDto>): Promise<void> {
    res.json({} as any)
  }

  async deleteLoan(req: Request<{ id: string }>, res: Response): Promise<void> {
    res.sendStatus(204)
  }
}
