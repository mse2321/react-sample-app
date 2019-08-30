import { take } from "redux-saga"

export function* helloSaga() {
  while(true) {
    yield take()
    console.log("Hello Sagas!")
  }
}
