import React, { Component } from 'react';
import SelectMemoStyle from './SelectMemo.module.css';
import { CgClose } from "react-icons/cg";


class SelectMemo extends Component {
    // state = {
    //     name: ''
    //   }
    //   handleChange = (e) => {
    //     this.setState({
    //       name: e.target.value
    //     })
    //   }

    constructor() {
      super();
      this.state = {
        text:"",
      };
    }
  
    handleChange = (e) => {
      this.setState({ text: e.target.value });
    };

    onReset = () => {
      this.setState({ text: ""});
    };
    

    render(){
        return(
            <section>
                <p className={SelectMemoStyle.select}>수입</p>
                <section className={SelectMemoStyle.type}>
                  <div className={SelectMemoStyle.type_box_clicked}>
                        <div className={SelectMemoStyle.type_box_text}>
                        기타
                        </div>
                  </div>
                </section>
                
                <div className={SelectMemoStyle.inputMemo}>
                  <input 
                    id="inputMemo"
                    type="text"
                    placeholder='ex) 스타벅스 아메리카노'
                    onChange={this.handleChange}
                    value={this.state.text}
                    />
                    <CgClose onClick={this.onReset} className={SelectMemoStyle.close}>as</CgClose>
                </div>
            </section>
        );
    }
}

export default SelectMemo;