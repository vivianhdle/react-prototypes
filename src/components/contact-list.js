import React, {Component} from 'react';
import ContactCard from './contact-card'

class ContactList extends Component {
    render(){
        const {contacts}=this.props;
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