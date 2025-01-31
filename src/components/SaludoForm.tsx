import React from 'react'
import { useState } from 'react'

export const SaludoForm = () => {
    const [nombre, setNombre] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (nombre.length < 3) {
            setError('El nombre es demasiado corto')
            setMensaje('')
        }
        else {
            setError('')
            setMensaje('Hola ' + nombre)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">nombre:</label>
                <input 
                    type="text"
                    id='nombre'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <button type='submit'>SALUDAR</button>
            </form>
            {error && <p>{error}</p>}
            {mensaje && <p>{mensaje}</p>}
        </div>
    )
}