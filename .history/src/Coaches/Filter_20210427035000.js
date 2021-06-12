import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "assets/css/filter.css";
import { Label, FormGroup, Input, Button } from "reactstrap";
import { IconCheckbox ,Icon} from "react-icon-checkbox";
export default class Filter extends Component {

  constructor(props){
    super(props);

    this.state={
        rate: 5,
        checkedRate2: false ,
        checkedRate3: false ,
        checkedRate4: false ,
        checkedRate5: false ,
        checkedRate1:false,
        checkedRate:[false,false,false,false,false],
        checkedGender: [false,false],
        checkedType: [false,false],
        
        gender:'',
        type:'',

    }

    this.state.handleFilter=this.handleFilter.bind(this);
   
    this.state.handleGender=this.handleGender.bind(this);
    this.state.handleType=this.handleType.bind(this);
  }
handleFilter(){
  
}

onClickButton= async ()=>{
  super.findCo}
    _onCheckboxClicked = (n) => {
    const x= [];
    console.log(x);
    for(let i=0; i<=n;i++){
    x.push(true);
    console.log(n);
    }
    if(n<5){for(let i=n+1;i<5;i++){x.push(false);}}
         this.setState({
         checkedRate: x,
           });

 
    }

  render() {
    const style = {
      color: "#d9d9d9",
      fontSize: "25px",
      marginRight: "10px",
    };
let x = this.state.checkedRate;

    return (
      <div>
        <hr></hr>
        <div style={{ margin: "10px" }}>
          <b>Rate</b>
        </div>
        {x.map((value, index) => {
            return <IconCheckbox checked={this.state.checkedRate[index]} 
            checkedIcon={ <FontAwesome className="fa-star text-warning" name="star" style={style}  />} 
            uncheckedIcon={ <FontAwesome className="fa-star" name="star" style={style} />}
            onClick={()=> this._onCheckboxClicked(index)} 
            />
        })
      }
        
{/*
        <FontAwesome className="fa-star" style={style} />
        <FontAwesome className="fa-star " style={style}></FontAwesome>
        <FontAwesome className="fa-star " style={style}></FontAwesome>
        <FontAwesome className="fa-star " style={style}></FontAwesome>
        <FontAwesome className="fa-star " style={style}></FontAwesome>
 */}
        <hr></hr>
        <div style={{ margin: "10px" }}>Gender</div>

        <FormGroup check>
          <Label check>
            <Input defaultValue="" type="checkbox" />
            Man <span className="form-check-sign" />
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input defaultValue="" type="checkbox" />
            Women <span className="form-check-sign" />
          </Label>
        </FormGroup>
        <hr></hr>

        <div style={{ margin: "10px" }}>Specialty </div>
        <div className="form-check-radio">
          <Label check>
            <Input
              defaultValue="option2"
              id="exampleRadios2"
              name="exampleRadios"
              type="radio"
            />
            Sport <span className="form-check-sign" />
          </Label>
        </div>
        <div className="form-check-radio">
          <Label check>
            <Input
              defaultValue="option2"
              id="exampleRadios2"
              name="exampleRadios"
              type="radio"
            />
            Nutrition <span className="form-check-sign" />
          </Label>
        </div>
        <div className="form-check-radio">
          <Label check>
            <Input
              defaultValue="option2"
              id="exampleRadios2"
              name="exampleRadios"
              type="radio"
            />
            Both <span className="form-check-sign" />
          </Label>
        </div>
        <hr></hr>
        <Button className="btn-sm " color="default" outline onClick={()=>this.onClickButton()}>
          Filter
        </Button>
      </div>
    );
  }
}
