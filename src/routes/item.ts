import { Router,Request,Response } from "express";
import { 
    deleteItem,
    getItem,
    getItems,
    postItem,
    updateItem
} from "../controller/item";
import { logMiddleware } from "../middleware/log";
const router = Router();

router.get('/item',getItems);
router.get('/item/:id',logMiddleware,getItem);
router.post('/item',postItem);
router.put('/item/:id',updateItem);
router.delete('/item/:id',deleteItem);
export {router};