import { Router } from "express"
import { PaymentController } from "../controllers/payment.controller.js"
import { auth } from "../middleware/auth.js"

const router = Router()
const controller = new PaymentController()

router.post("/loans/:loanId/payments", auth, controller.makePayment)
router.get("/loans/:loanId/payments", controller.listPayments)
router.get("/loans/:loanId/payments/:paymentId", controller.getPayment)

export default router
