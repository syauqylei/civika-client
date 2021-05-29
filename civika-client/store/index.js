import { createStore, applyMiddleware } from "redux";

const initialState = {
  dataUser: {
    name: "Muhamad Riski Putra Awali",
    status: "Mahasiswa",
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
