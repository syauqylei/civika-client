import React, { useState, createRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useSelector } from "react-redux";
import useRupiah from "../hooks/useRupiah";
import { Label, Card, Button } from "native-base";
import ModalPaymentUKT from "../components/ModalPaymentUKT";

export default function ScreenUKT() {
  const actionSheetRef = createRef();
  const studentData = useSelector((state) => state.dataUser);
  const dataPayment = useSelector((state) => state.paymentMethodList);
  const { uktConverted } = useRupiah(studentData.ukt);
  const [paymentMethod, setPaymentMethod] = useState(undefined);

  function selectPaymentMethod(value) {
    setPaymentMethod(value);
    actionSheetRef.current?.setModalVisible(false);
  }

  function submitPaymentUKT() {
    const payment = dataPayment.find(
      (payment) => payment.name === paymentMethod
    );
    console.log(payment);
  }

  return (
    <View
      style={{
        backgroundColor: "#dbe2ef",
        flex: 1,
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#3f72af",
          marginVertical: 10,
          alignSelf: "center",
        }}
      >
        Form Pembayaran UKT
      </Text>
      <View style={{ flex: 1 }}>
        <Card style={styles.card}>
          <Label style={styles.label}>Nama</Label>
          <Text style={styles.text}>{studentData.name}</Text>
        </Card>
        <Card style={styles.card}>
          <Label style={styles.label}>Total UKT</Label>
          <Text style={styles.text}>Rp {uktConverted}</Text>
        </Card>
        <Card style={styles.card}>
          <Label style={styles.label}>Status Pembayaran</Label>
          <Text style={styles.text}>
            {studentData.uktStatus ? "Lunas" : "Menunggu Pembayaran"}
          </Text>
        </Card>
        <Card style={{ ...styles.card, height: 80 }}>
          <Label style={{ ...styles.label, flex: 1 }}>Metode Pembayaran</Label>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 60,
              backgroundColor: "transparent",
              borderBottomColor: "#333",
              borderBottomWidth: 1,
            }}
            onPress={() => {
              !studentData.uktStatus
                ? actionSheetRef.current?.setModalVisible()
                : null;
            }}
          >
            <TextInput
              value={paymentMethod}
              editable={false}
              placeholder="Pilih Metode Pembayaran"
            />
          </TouchableOpacity>
          <ModalPaymentUKT
            selectPaymentMethod={selectPaymentMethod}
            actionSheetRef={actionSheetRef}
            dataPayment={dataPayment}
          />
        </Card>
        <Button
          style={{
            width: 80,
            justifyContent: "center",
            alignSelf: "center",
            marginVertical: 20,
          }}
          onPress={submitPaymentUKT}
        >
          <Text
            style={{
              color: "#dbe2ef",
              fontSize: 22,
            }}
          >
            Bayar
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#3f72af",
  },
  card: {
    paddingHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
  text: {
    fontSize: 15,
  },
});
