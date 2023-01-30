import React, { useEffect, useState } from 'react'
import './style.scss'
import {initializeApp} from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import ShareIcons from '../../components/shareIcons/ShareIcons';
import Location from './Location';
const firebaseConfig = {
  apiKey: "AIzaSyCKgprn6_Uy87iHc5GCivaaZYUDjTPC8rs",
  authDomain: "amrit-davani.firebaseapp.com",
  projectId: "amrit-davani",
  storageBucket: "amrit-davani.appspot.com",
  messagingSenderId: "811874670863",
  appId: "1:811874670863:web:941f7676bc543a8129867a",
  measurementId: "G-9MB4PV8NFM"
};
export const ContactUs = ()=>{
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    const [name,setName] = useState('')
    const [db,setDb] = useState()
    useEffect(()=>{
        const app = initializeApp(firebaseConfig)
        const _db = getFirestore(app)
        setDb(_db)
    },[])

    const submit = async (e)=>{
        e.preventDefault();
        if(name === '' || email ==='' || mobile === ''){
            alert('Please fill in all fields')
        }else{
        try {
             await addDoc(collection(db, "contactusrequests"), {
              name,
              email,
              mobile
            });
            alert('Our team will contact you shortly')
            setName('')
            setEmail('')
            setMobile('')
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }
    }
    return (
        <div className='main'>
            <h1>Contact</h1>
            <div className="container">
                <form onSubmit={submit}>
                    <label for="fname">Name</label>
                    <input required onChange={e=>setName(e.target.value)} type="text" id="fname" name="firstname" placeholder="Your name.." />
                    <label for="email">Email</label>
                    <input required onChange={e=>setEmail(e.target.value)}  type="email" id="email" placeholder="Your Email" />
                    <label for="mobile">Mobile</label>
                    <input required onChange={e=>setMobile(e.target.value)} type="number" id="mobile" placeholder="Your Mobile" />
                    <input onSubmit={submit} type="submit" value="Submit" />
                </form>
            </div>
            {/* <div className="contact-container">
            <div className="contact-item">
                <i className="fas fa-phone"></i> 
                <a href="tel:9644095272" className="contact-link">+91 75669 04500</a>
            </div>
            <div className="contact-item">
                <i className="fas fa-envelope"></i> 
                <a href="mailto:amrit@davani.com" className="contact-link">contact@amritdawani.com</a>
            </div>
            <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i> 
                 19/1, New Palasia, Indore (M.P.) 452001
            </div> */}
        {/* </div> */}
        <Location /> 
        <ul className="contact-listt">
            <li className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:9644095272" className="contact-link">+91 75669 04500</a>
            </li>
            <li className="contact-item">
                <i className="fas fa-envelope"></i> 
                <a href="mailto:amrit@davani.com" className="contact-link">Amritdawaniofficial@gmail.com</a>
            </li>
            <li className="contact-item">
                <i className="fas fa-map-marker-alt"></i> 
                    19/1, New Palasia, Indore (M.P.) 452001
            </li>
        </ul>
        <ShareIcons />
        </div>
    )
}