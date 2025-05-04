import React from 'react';
import { useParams } from 'react-router-dom';
import {AddNewContact} from './AddNewContact';
import {useState, useEffect} from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const EditContact=()=>{
    const {dispatch, store}=useGlobalReducer()
    const {id}=useParams()
    const[contactoEditado, setContactoEditado]=useState(null)

    useEffect(()=>{
        if (store&&store.contacts){
            const contacto=store.contacts.find((contact)=>contact.id===parseInt(id))
        if (contacto){
            setContactoEditado(contacto)
        }
        }
    },[id.store])


    return(
        <div></div>

    )    
}
