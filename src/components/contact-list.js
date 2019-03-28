import React, {Component} from 'react';
import contactData from '../data/contacts'
import ContactCard from './contact-card'

class ContactList extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts:contactData
        }
    }
    render(){
        const {contacts}=this.state;
        const contactElements = contacts.map((item,index)=>{
            return <ContactCard key={index} contact={item}/>
        })
        return(
            <div className="col-8">
                <div className="row">
                    {contactElements}
                </div>
            </div>
        )
    }
}
export default ContactList;