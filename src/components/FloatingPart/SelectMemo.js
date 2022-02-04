import React, { Component } from 'react';
import SelectMemoStyle from './SelectMemo.module.css';

class SelectMemo extends Component {
    state = {
        name: ''
      }
      handleChange = (e) => {
        this.setState({
          name: e.target.value
        })
      }
    render(){
        return(
            <section>
                <p className={SelectMemoStyle.select}>수입지출</p>
                <section className={SelectMemoStyle.type}>
                  <div className={SelectMemoStyle.type_box_clicked}>
                        <div className={SelectMemoStyle.type_box_text}>
                        기타
                        </div>
                  </div>
                </section>
                <form>
                <input value={this.state.name}
          onChange={this.handleChange} placeholder="ex. 스타벅스 아메리카노" className={SelectMemoStyle.input}></input>
                </form>
            </section>
        );
    }
}

export default SelectMemo;