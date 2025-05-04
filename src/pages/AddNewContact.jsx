import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useGlobalReducer from '../hooks/useGlobalReducer'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function AddNewContact() {
  const { dispatch } = useGlobalReducer();
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [direccion, setDireccion] = useState("")

  const navigate = useNavigate()

  const createContact = () => {
    const data = { name: nombre, mail: email, phone: phone, address: direccion };

    fetch('https://playground.4geeks.com/contact/agendas/danivera/contacts', {
      method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("la respuesta no ha sido ok")
        }

        return response.json()
      })
      .then(data => {
        console.log("contacto creado", data)
        dispatch({ type: "addContact", payload: data })
        setNombre("")
        setEmail("")
        setPhone("")
        setDireccion("")
        navigate("/")
      })
      .catch(error => {
        console.error("ha habido un problema con la peticion", error)
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createContact()
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="row g-3 m-4">
        <div className="col-md-6">
          <label htmlFor="inputNombre" className="form-label">Nombre y apellidos</label>
          <input
            type="input"
            value={nombre}
            className="form-control"
            id="inputNombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Direccion</label>
          <input
            type="text"
            value={direccion}
            className="form-control"
            onChange={(e) => setDireccion(e.target.value)}
            id="inputAddress"
          />
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="telefono" className="form-label">Telefono</label>
          <input
            type="number"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="telefono"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-outline-dark">
            enviar
          </button>

        </div>
      </form>
    </>
  );

}

export default AddNewContact;
