import express from "express"
import loanRouter from "./routes/loan.routes.js"
import paymentRouter from "./routes/payment.routes.js"
import healthRouter from "./routes/health.routes.js"

const app = express()

app.use(express.json())

// Pattern 5: Mounted sub-routers with prefix
app.use("/api/v1", loanRouter)
app.use("/api/v1", paymentRouter)
app.use("/api", healthRouter)

export default app
