import express from 'express';
import controller from '../controllers/Merchandise';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.post('/', ValidateSchema(Schemas.merchandise.create), controller.createMerchandise);
router.get('/:merchandiseId', controller.readMerchandise);
router.get('/', controller.readAll);
router.patch('/:merchandiseId', ValidateSchema(Schemas.merchandise.update), controller.updateMerchandise);
router.delete('/:merchandiseId', controller.deleteMerchandise);

export = router;
