import express from 'express';
import controller from '../controllers/Store';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.post('/', ValidateSchema(Schemas.store.create), controller.createStore);
router.get('/:storeId', controller.readStore);
router.get('/', controller.readAll);
router.patch('/:storeId', ValidateSchema(Schemas.store.update), controller.updateStore);
router.delete('/:storeId', controller.deleteStore);

export = router;
