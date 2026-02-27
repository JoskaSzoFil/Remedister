import { GeneroModel } from '../model/generoModel.js'

export const GeneroController = {
    getAll: async (req, res) => {
        try {
            const result = await GeneroModel.getAll()
            res.json(result)
        } catch (err) {
            res.status(500).json({ error: 'Internal Server Error' })
        }
    },
    create: async (req, res) => {
        try {
            const { nombre } = req.body
            if (!nombre) {
                return res.status(400).json({ error: 'nombre is required' })
            }
            const result = await GeneroModel.createGenero(nombre)
            res.status(201).json(result)
        } catch {
            res.status(500).json({ error: 'Internal Server Error' })
        }
    },
    delete: async (req, res) => {
        try {
            const { id_genero } = req.params
            if ( !id_genero ) {
                return res.status(400).json({ error: 'id is required' })
            }
            const result = await GeneroModel.deleteGenero(id_genero)
            res.status(200).json(result)
        } catch {
            res.status(500).json({ error: 'Internal Server Error'})
        }
    },
    update: async (req, res) => {
        try {
            const { nombre } = req.body
            const { id_genero } = req.params
            
            if ( !nombre || !id_genero ) {
                res.status(400).json({ error: 'A parameter is missing' })
            }
            const result = await GeneroModel.updateGenero(nombre, id_genero)
            res.status(200).json(result)
        } catch {
            res.status(500).json({ error: 'Internal Server Error' })
        }
    }
}
