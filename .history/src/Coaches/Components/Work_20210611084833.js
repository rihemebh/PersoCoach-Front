import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
            <div>
                 <div className="form-inline ">    
               <h6 className="">
                   Work : 
               <AvField  name="workname"className="" type="text" label=""  style={{marginTop: "3px", marginRight: "20px"}}/>
            
                  
                      </h6>

                    <h6 className=""  >
                    Description 
                      <AvField  name="expdesc" className="c"  type="textarea" label=""  style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
              
             
           
                
                      </div> 
            </div>
        )
    }
}
