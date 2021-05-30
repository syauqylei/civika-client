import { 
  SET_LECTURE,
  SET_USER_ERR,
  SET_STUDENTS,
  SET_USER,
  SET_USER_LOADING,
  SET_TOKEN,
  SET_TOKEN_ERR,
  SET_TOKEN_LOADING,
  SET_LECTURE_ERR,
  SET_LECTURE_LOADING
 } from "./action"

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
    role: "teacher",
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
  addClass: [],
  students: [],
  userErr: false,
  userLoading: false,
  access_token: "",
  tokenLoading: false,
  tokenErr: false,
  lectureLoading: false,
  lectureErr: false,
};

export default function reducers(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "student/addClass":
      return { ...state, addClass: state.addClass.concat(payload) };
    case SET_USER:
      return { ...state, dataUser: payload };
    case SET_USER_ERR:
      return { ...state, userErr: payload };
    case SET_USER_LOADING:
      return { ...state, userLoading: payload };
    case SET_TOKEN:
      return { ...state, access_token: payload };
    case SET_TOKEN_ERR:
      return { ...state, tokenErr: payload };
    case SET_TOKEN_LOADING:
      return { ...state, tokenLoading: payload };
    case SET_LECTURE:
      return { ...state, allLecture: payload };
    case SET_LECTURE_LOADING:
      return { ...state, lectureLoading: payload };
    case SET_LECTURE_ERR:
      return { ...state, lectureErr: payload };
    case SET_STUDENTS:
      return { ...state, students: payload };
    default:
      return state;
  }
}