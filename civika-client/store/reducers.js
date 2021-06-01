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
  SET_LECTURE_LOADING,
  SET_CLASS,
  SET_ANNOUNCEMENT,
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
    fullName: "Mulki Marwan Adam",
    address:
      "Jl. A. Yani, Surabaya, Jawa Timur, Indonesia, Bumi, Galaksi Bima Sakti",
    role: "teacher",
    phoneNumber: "0812391827365",
    ukt: 5000000,
    ipk: 3.23,
    uktStatus: false,
    email: "test@mail.com",
    role: "student"
  },
  allLecture: [],
  remainingClass: [],
  addClass: [],
  students: [],
  userErr: false,
  userLoading: false,
  access_token: "",
  tokenLoading: false,
  tokenErr: false,
  lectureLoading: false,
  lectureErr: false,
  announcement: []
}

export default function reducers(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ANNOUNCEMENT:
      return { ...state, announcement: payload };
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
    case SET_CLASS:
      return { ...state, remainingClass: payload };
    case SET_LECTURE:
      return { ...state, allLecture: payload.map(lecture => lecture.Lecture) };
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