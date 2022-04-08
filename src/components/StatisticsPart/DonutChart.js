import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { PieChart } from "react-minimal-pie-chart";
import { useState } from "react";

const percent = 67; //받아오는 데이터 값

const data = [
  {
    index: 0,
    title: "친환경 지출",
    value: percent,
    color: "url(#gradient)"
  },
  {
    //친환경 단일 데이터로 진행하셨던 것 같은데
    //반환경도 선택/강조가 있어서 부득이하게 데이터를 추가했습니다!
    index: 1,
    title: "반환경 지출",
    value: 100 - percent, //반환경은 계산되도록
    color: "#566479"
  }
];

//퍼센테이지 라벨
const defaultLabelStyle = {
  fontSize: "8px",
  fontWeight: "900",
  fontFamily: "Pretendard",
  fill: "white"
};

const segmentsStyle = { cursor: "pointer" };

const DonutChart = ({ percentage }) => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
        }}
      >
        <PieChart
          data={data}
          lengthAngle={360}
          startAngle={270}
          viewBoxSize={[200, 120]}
          center={[100, 60]}
          animate
          labelPosition={0}
          lineWidth={34} //도넛 두께
          segmentsStyle={(index) => {
            return index === selected //인덱스랑 현재 선택한 데이터 인덱스가 같으면 두껍게 하는 속성 추가
              ? { ...segmentsStyle, strokeWidth: 21 }
              : segmentsStyle;
          }}
          onClick={(event, index) => {
            // 클릭하면 인덱스(친/반환경) 변경
            setSelected(index);
          }}
        >
          <defs>
            {/* 그라데이션 코드 - id값으로 적용*/}
            <linearGradient id="gradient" x1="50%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00C982" />
              <stop offset="100%" stopColor="#1466FE" />
            </linearGradient>
          </defs>
          <text
            dominant-baseline="central"
            x="100"
            y="55"
            text-anchor="middle"
            style={{ fontSize: "8px", fill: "white" }} //친/반환경 지출 label
          >
            {data[selected].title}
          </text>
          <text
            dominant-baseline="central"
            x="100"
            y="65"
            dx="0"
            dy="0"
            text-anchor="middle"
            style={defaultLabelStyle}
          >
            {data[selected].value}%
          </text>
        </PieChart>
      </View>
    </View>
  );
};

export default DonutChart;
