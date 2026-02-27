import { pool } from '../db.js'

export const GeneroModel = {
    getAll: async () => {
        const result = await pool.query(
            'SELECT id_genero, nombre FROM genero'
        )
        return result.rows
    },
    createGenero: async (nombre) => {
        const result = await pool.query(
            'INSERT INTO genero (nombre) VALUES ($1) RETURNING id_genero', [nombre]
        )
        return result.rows[0]
    },
    deleteGenero: async (id_genero) => {
        const result = await pool.query(
            'DELETE FROM genero WHERE id_genero = $1 RETURNING nombre', [id_genero]
        )
        return result.rows[0]
    },
    updateGenero: async (nombre, id_genero) => {
        const result = await pool.query(
            'UPDATE genero SET nombre = $1 WHERE id_genero = $2 RETURNING nombre', [nombre, id_genero]
        )
        return result.rows
    }
}
