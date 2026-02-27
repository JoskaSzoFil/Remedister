import express from 'express'
import { GeneroController } from '../controller/generoController.js'
const router = express.Router()

router.get('/', GeneroController.getAll)
router.post('/',GeneroController.create)
router.delete('/:id_genero', GeneroController.delete)
router.patch('/:id_genero', GeneroController.update)

export default router