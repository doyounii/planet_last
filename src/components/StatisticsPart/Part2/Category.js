import React, { useEffect }from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import './Category.css';
import { FaChevronLeft } from 'react-icons/fa';



function Category() {
    const history = useNavigate();

    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
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