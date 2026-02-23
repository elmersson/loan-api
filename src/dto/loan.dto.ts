import { EmploymentStatus, LoanStatus } from "../models/enums.js"

// Pattern 1: Exported interface with required and optional fields
export interface LoanApplicationDto {
  amount: number
  termMonths: number
  employmentStatus: EmploymentStatus
  applicantName: string
  applicantEmail: string
  annualIncome: number
  notes?: string
}

// Pattern 2: Exported type alias
export type LoanResultDto = {
  approved: boolean
  loanId: string
  interestRate: number
  monthlyPayment: number
  rejectionReason?: string
}

// Pattern 3: Another exported interface
export interface LoanDetailDto {
  id: string
  amount: number
  termMonths: number
  interestRate: number
  status: LoanStatus
  applicantName: string
  applicantEmail: string
  employmentStatus: EmploymentStatus
  createdAt: string
  updatedAt: string
}

// Pattern: Exported interface used as update DTO (partial)
export interface UpdateLoanDto {
  amount?: number
  termMonths?: number
  employmentStatus?: EmploymentStatus
  notes?: string
}

// Validation schemas (non-extractable as DTOs, but referenced by routes)
export const CreateLoanSchema = {} as any
export const UpdateLoanSchema = {} as any
