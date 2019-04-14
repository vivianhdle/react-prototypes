import React, {Component} from 'react';
import ContactCard from './contact-card'


export default props => {
    const {contacts}=props;
    const contactElements = contacts.map((item,index)=>{
        return <ContactCard key={index} contact={item}/>
    })
    return (
        <div className="col-8">
            <div className="row">
                {contactElements}
            </div>
        </div>
    )
}