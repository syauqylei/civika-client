import { createStore, applyMiddleware } from "redux";

const initialState = {
  paymentMethodList: [
    {
      name: "Mandiri Virtual Account",
      value: "M1",
    },
    {
      name: "BCA KlikPay",
      value: "BK",
    },
    {
      name: "Permata Bank Virtual Account",
      value: "BT",
    },
    {
      name: "CIMB Niaga Virtual Account",
      value: "B1",
    },
    {
      name: "ATM Bersama",
      value: "A1",
    },
    {
      name: "BNI Virtual Account",
      value: "I1",
    },
    {
      name: "Maybank Virtual Account",
      value: "VA",
    },
    {
      name: "OVO",
      value: "OV",
    },
  ],
  dataUser: {
    fullName: "Muhamad Riski Putra Awali",
    address:
      "Jl. A. Yani, Surabaya, Jawa Timur, Indonesia, Bumi, Galaksi Bima Sakti",
    role: "student",
    phoneNumber: "0812391827365",
    ukt: 5000000,
    ipk: 3.23,
    uktStatus: false,
    email: "test@mail.com",
  },
  allLecture: [
    {
      id: 1,
      lecture: "Giring bola",
      sks: 2,
      time: "10.00",
    },
    {
      id: 2,
      lecture: "Terbang",
      sks: 3,
      time: "08.00",
    },
    {
      id: 3,
      lecture: "Cetak gol",
      sks: 5,
      time: "10.00",
    },
    {
      id: 4,
      lecture: "Passing",
      sks: 5,
      time: "10.00",
    },
  ],
  todayClasses: [
    {
      lecture: "Giring bola",
      sks: 2,
      time: "10.00",
      dosen: "Lionel Messi",
    },
    {
      lecture: "Terbang",
      sks: 3,
      time: "08.00",
      dosen: "Cristiano Ronaldo",
    },
    {
      lecture: "Cetak gol",
      sks: 5,
      time: "10.00",
      dosen: "Ronaldo de Nazario",
    },
    {
      lecture: "Passing",
      sks: 5,
      time: "10.00",
      dosen: "Kevin de Bruyne",
    },
  ],
  addClass: [],
};

function reducers(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "student/addClass":
      return { ...state, addClass: state.addClass.concat(payload) };
    default:
      return state;
  }
}

const store = createStore(reducers);

export default store;
