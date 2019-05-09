import express from "express";

const router = express.Router();

router.get("/", function(req, res) {
    res.json({
        message: "What it is"
    });
});

export default router;
