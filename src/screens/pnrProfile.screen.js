import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

export const pnrProfileScreen = () => {
  return (
    <View>
      <Card elevation={5} style={styles.CardContainer}>
        <View style={styles.headerConatiner}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleComponent1}>train</Text>
            <Text style={styles.titleComponent2}>helper</Text>
            <Text style={styles.titleComponent3}>.in</Text>
          </View>
          <View style={styles.pnrContainer}>
            <Text style={styles.pnrTitle}>PNR NUMBER</Text>
            <Text style={styles.pnrNumber}>4335734389</Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <View>
            <Text style={styles.mainText}>From</Text>
            <Text style={styles.dataText}>LOKMANYATILAK T[LTT]</Text>
          </View>
          <View>
            <Text style={styles.mainText}>{"\t\t\t\t\t\t\t\t\t\t\t"}To</Text>
            <Text style={styles.dataText}>PANVEL[PNVL]</Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <View>
            <Text style={styles.mainText}>Date</Text>
            <Text style={styles.dataText}>Wed 20 November</Text>
          </View>
          <View>
            <Text style={styles.mainText}>{"\t\t\t\t"}Time</Text>
            <Text style={styles.dataText}>06:45PM</Text>
          </View>
        </View>
        <View style={styles.trainNameContainer}>
          <Text style={styles.mainText}>Train Name</Text>
          <Text style={styles.dataText}>LTT HUBLI EXP(17318)</Text>
        </View>

        <View style={styles.passangersDeailsContainer}>
          <View style={styles.passangerContainer}>
            <Text>PASSANGER 1</Text>
          </View>
          <View>
            <View style={styles.dataContainer}>
              <View>
                <Text style={styles.mainText}>BOOKING STATUS</Text>
              </View>
              <View>
                <Text style={styles.mainText}>CURRENT STATUS</Text>
              </View>
            </View>
            <View style={styles.dataContainer}>
              <View>
                <Text style={styles.dataText}>CNF/S1/45</Text>
              </View>
              <View>
                <Text style={styles.dataText}>CNF/S1/45</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.chartStatus}>Chart NOT Ready</Text>
          </View>
          <View>
            <Text style={styles.coachClass}>CLASS:SL</Text>
          </View>
        </View>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    margin: 15,
    backgroundColor: "#4D91FE",
    borderRadius: 10,
    borderColor: "#4D91FE",
    borderWidth: 1,
  },
  headerConatiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 10,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 10,
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    // backgroundColor: "white",
  },
  trainNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainText: {
    color: "#A4F4F5",
    fontWeight: "bold",
  },
  dataText: {
    fontWeight: "bold",
  },
  chartStatus: {
    backgroundColor: "#D83533",
    color: "white",
    fontWeight: "bold",
    borderRadius: 3,
    padding: 5,
    margin: 10,
  },
  coachClass: {
    backgroundColor: "#13427A",
    color: "white",
    fontWeight: "bold",
    borderRadius: 3,
    padding: 5,
    margin: 10,
  },
  passangerContainer: {
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  passangersDeailsContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  pnrTitle: {
    color: "#D96359",
    fontWeight: "bold",
  },
  pnrNumber: {
    color: "#D96359",
    fontWeight: "bold",
    fontSize: 20,
  },
  pnrContainer: {
    alignItems: "flex-end",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  titleComponent1: {
    color: "#338FBA",
    fontWeight: "bold",
    fontSize: 30,
  },
  titleComponent2: {
    color: "#040404",
    fontWeight: "bold",
    fontSize: 30,
  },
  titleComponent3: {
    color: "#338FBA",
    fontWeight: "bold",
    fontSize: 30,
  },
});
