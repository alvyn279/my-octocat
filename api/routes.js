import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "What it is"
    });
});

export default router;
