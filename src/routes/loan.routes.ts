import { Router } from "express"
import { LoanController } from "../controllers/loan.controller.js"
import { auth } from "../middleware/auth.js"
import { validate } from "../middleware/validate.js"
import { CreateLoanSchema, UpdateLoanSchema } from "../dto/loan.dto.js"

const router = Router()
const controller = new LoanController()

// Pattern 1: router.METHOD(path, handler)
router.get("/loans", controller.listLoans)

// Pattern 2: router.METHOD(path, ...middleware, handler)
router.post("/loans/apply", auth, validate(CreateLoanSchema), controller.applyForLoan)

// Pattern 3: router.METHOD with multiple middleware
router.put("/loans/:id", auth, validate(UpdateLoanSchema), controller.updateLoan)

// Pattern 4: Simple handler
router.get("/loans/:id", controller.getLoanById)

// Pattern 5: Delete route
router.delete("/loans/:id", auth, controller.deleteLoan)

export default router
