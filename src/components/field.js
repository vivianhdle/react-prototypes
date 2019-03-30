import React from 'react';

export default (props) => {
    const {name,label,value} = props
    return (
        <div className="form-group">
            <label htmlFor="">{label}</label>
            <input {...props} type="text" className="form-control"/>
        </div>
    );
}





