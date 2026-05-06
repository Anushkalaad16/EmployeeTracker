import express from 'express';
import authMiddleware from '../middleware/auth';
import { createUpdate, getUpdates } from '../controllers/updateController';

const router = express.Router();        


router.post("/", authMiddleware, createUpdate);
router.get("/", authMiddleware, getUpdates);

export default router;