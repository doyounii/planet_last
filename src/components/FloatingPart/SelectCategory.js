import React, { Component } from 'react';
import SelectCategoryStyle from './SelectCategory.module.css';

class SelectCategory extends Component {
    render(){
        return(
            <section className={SelectCategoryStyle.type}>
                  <button className={SelectCategoryStyle.type_box}>
                        <p>&#128176;</p>
                        <div className={SelectCategoryStyle.type_box_text}>
                        급여
                        </div> 
                  </button>
                  <button className={SelectCategoryStyle.type_box}>
                        <p>&#128091;</p>
                        <div className={SelectCategoryStyle.type_box_text}>
                        용돈
                        </div>
                  </button>
                  <button className={SelectCategoryStyle.type_box}>
                        <p>&#128172;</p>
                        <div className={SelectCategoryStyle.type_box_text}>
                        기타
                        </div>
                  </button>
            </section>
        );
    }
}

export default SelectCategory;