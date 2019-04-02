import React from 'react'

export default props=>{
    const {info}=props;
    console.log(info);
    return(
        <div>
            <a href={info.id.label} target="_blank"><img src={info['im:image'][2].label}/></a>
            <h3>{info.title.label}</h3>
            <p>{info.summary.label}</p>
        </div>
    )
}
