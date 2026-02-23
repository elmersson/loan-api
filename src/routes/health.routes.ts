import { Router } from "express"

const router = Router()

// Pattern 3: Inline arrow handler
router.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() })
})

export default router
