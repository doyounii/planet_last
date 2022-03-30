import React, { useEffect }from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './Category.css';
import { FaChevronLeft } from 'react-icons/fa';



function Category() {
    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


  return (
    <div className='container'>
        <div className='header'>
        <FaChevronLeft
                className="forward-arrow"
                onClick={() => {
                history(-1);
                }}
            />
        <h1 className='category'>친환경 카테고리</h1>
        </div>
        <h1 className='title'>지출 카테고리별 소비</h1>
        </div>
  )
}

export default Category