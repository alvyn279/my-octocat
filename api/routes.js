import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'What it is'
    });
});

router.post('/login/github/', (req, res) => {
    // handle github login
});

export default router;
