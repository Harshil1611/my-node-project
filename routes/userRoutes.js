import express from 'express';
const router = express.Router();
import { authenticate } from '../middleware/authMiddleware.js'; // Import authenticate
import UserController from '../controllers/userController.js';

router.get('/', authenticate, UserController.getAllUsers);
router.post('/', authenticate, UserController.createUser);
router.get('/:id', authenticate, UserController.getUserById);
router.put('/:id', authenticate, UserController.updateUser);
router.delete('/:id', authenticate, UserController.deleteUser);

export default router;
