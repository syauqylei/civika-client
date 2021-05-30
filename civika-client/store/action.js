export const SET_STUDENTS = "students/setStudents"
export const SET_LECTURE = "lecture/setLecture"
export const SET_LECTURE_ERR = "lectureErr/setLectureErr"
export const SET_LECTURE_LOADING = "lectureLoading/setLectureLoading"
export const SET_TOKEN = "token/setToken"
export const SET_TOKEN_ERR = "tokenErr/setTokenErr"
export const SET_TOKEN_LOADING = "tokenLoading/setTokenLoading"
export const SET_USER = "user/setUser"
export const SET_USER_ERR = "userErr/setUserErr"
export const SET_USER_LOADING = "userLoading/setUserLoading"

export function setUser (payload) {
  return { type: SET_USER, payload }
}
export function setToken (payload) {
  return { type: SET_TOKEN, payload }
}
export function setLecture (payload) {
  return { type: SET_LECTURE, payload }
}

export function login (payload) {
  return function (dispatch) {
    dispatch({ type: SET_TOKEN_LOADING, payload: true })
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
  }
}

export function fetchUser (id, token) {
  return function (dispatch) {
    dispatch({ type: SET_USER_LOADING, payload: true })
    fetch('http://localhost:3000/users/' + id, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'access_token': token
      }
    })
      .then(res => res.json())
      .then(user => {
        dispatch({ type: SET_USER, payload: user })
      })
      .catch(err => console.log(err))
      .finally(() => {
        dispatch({ type: SET_USER_LOADING, payload: false })
      })
  }
}

export function editUser (payload, token) {
  return function (dispatch) {
    console.log(payload.id, payload);
    dispatch({ type: SET_USER_LOADING, payload: true })
    fetch('http://localhost:3000/users/edit?id=' + (+payload.id), {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'access_token': token
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(user => {
        dispatch(fetchUser(payload.id, token))
      })
      .catch(err => console.log(err))
      .finally(() => {
        dispatch({ type: SET_USER_LOADING, payload: false })
      })
  }
}

export function sendPayment (payload, token, id) {
  return function (dispatch) {
    return fetch(`http://localhost:3000/users/${+id}/genDuitkuLink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': token
      },
      body: JSON.stringify({method: payload.value})
    })
  }
}

export function fetchLecture (token) {
  return function (dispatch) {
    dispatch({ type: SET_LECTURE_LOADING, payload: true })
    fetch('http://localhost:3000/lectures/', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'access_token': token
      }
    })
      .then(res => res.json())
      .then(lecture => {
        dispatch({ type: SET_LECTURE, payload: lecture })
      })
      .catch(err => console.log(err))
      .finally(() => {
        dispatch({ type: SET_LECTURE_LOADING, payload: false })
      })
  }
}