import { PieChart } from "react-minimal-pie-chart";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const DonutChart = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "214px",
        }}
      >
        <PieChart
          data={[
            {
              value: 72,
              //color: "#F6CB44",
              background: "linear-gradient(to right top, #861657, #ffa69e)",
              color: "transparent",
              backgroundClip: "text",
              name: "EcoExpend",
            },
          ]}
          reveal={72} //퍼센트치수
          lineWidth={28} //도넛 두께
          background="#f3f3f3"
          lengthAngle={360}
          startAngle={270}
          //viewBoxSize={[214, 100]}
          animate
          label={({ dataEntry }) => "차트를 선택하세요"}
          //label={({ dataEntry }) => "차트를 선택하세요" + dataEntry.value + "%"}
          labelStyle={{
            fontSize: "6px",
            fontFamily: "Pretendard",
            fill: "#939393",
          }}
          labelPosition={0}
        />
      </View>
    </View>
  );
};

export default DonutChart;
