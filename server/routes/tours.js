import {Router} from 'express';
import {getHome} from '../controllers/tours.js';

const router = Router()

router.get('/', getHome)

export default router