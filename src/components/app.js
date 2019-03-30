import React, {Component} from 'react';
import ContactList from './contact-list';
import ContactForm from './contact-form';
import contactData from '../data/contacts'

class App extends Component{
    state = {
        contacts:contactData
    }
    addContact=contact=>{
        console.log('App: add contact', contact);
        this.setState({
            contacts:[contact,...this.state.contacts]
        })
    }
    render(){
        return (
            <div className="container">
                <h1 className="text-center">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm add={this.addContact}/>
                    </div>
                    <ContactList contacts={this.state.contacts}/>
                </div>
            </div>
        )
    }
}


export default App;
