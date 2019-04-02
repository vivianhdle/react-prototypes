import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import Macarons from './our_macarons';
import GiftAndParties from './gift_parties';
import Contact from './contact';

export default props => (
    <div>
        <Nav/>
        <Route exact path="/" component={Welcome}/>
        <Route path="/macarons" component={Macarons}/>
        <Route path="/giftandparties" component={GiftAndParties}/>
        <Route path="/contact" component={Contact}/>
    </div>
)