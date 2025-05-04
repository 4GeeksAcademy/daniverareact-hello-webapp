import React, { useEffect } from "react";
import CardContacts from "../components/CardContacts";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

//crud (crear, leer, actualizar y borrar)


const Contacts = () => {
    const { dispatch, store } = useGlobalReducer()
    const { contacts } = store

    const getContacts = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/danivera/contacts")//trasladar el fetch con POST al Addnewcontact
            if (!response.ok) {
                throw new Error(`el estado de error en la respuesta: ${response.status}`)

            }
            const data = await response.json()
            dispatch({ type: "set_contacts", payload: data.contacts })
        } catch (error) {
            console.error("error carga contactos", error)
            crearAgenda()
        }
    }
    const crearAgenda=async()=>{
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/danivera",{method:"POST"})//trasladar el fetch con POST al Addnewcontact
            if (!response.ok) {
                throw new Error(`el estado de error en la respuesta: ${response.status}`)
            }
            const data = await response.json()
            getContacts()
        } catch (error) {
            console.error("error carga contactos", error)
        }


    }
    useEffect(() => {
        getContacts()

    }, [])
    return (<><div>
        <div>
            <h1>contacts</h1>
           

        </div>
        {contacts && contacts.lenght === 0 ? (

            <div>
                <p>no hay contactos, añade alguno para que aparezcan en esta vista</p>
                <Link to="/taquitosdulces" className="btn btn-primary">addContacts</Link>
            </div>
        ) : (
            contacts && contacts.map((contact) => (
                <CardContacts
                    key={contact.id}
                    name={contact.name}
                    phone={contact.phone}
                    email={contact.email}
                    address={contact.address}
                />

            ))
        )}
    </div></>)
}

export default Contacts