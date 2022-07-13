import React, { useState } from 'react';

//상세 정보
const CouponDetailInfo = (props) => {
  // const [couponDetailInfo, setCouponDetailInfo] = useState({});

  // const fetchData = async (date) => {
  //   const response = await fetch(
  //     `zinzo1019@gmail.com/mypage/coupon`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     }
  //   )
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   const data = await response.json();

  //   setCouponDetailInfo(data.detail_info);
  // };
    return(
      <div style={{color:"rgba(180, 182, 184, 0.5)"}}>
      <section>
        <main>{props.children}</main>
      </section>
      </div>
    );
}

export default CouponDetailInfo;