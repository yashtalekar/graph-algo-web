import { createStore } from "easy-peasy"
import model, { storeModel } from "./model"

const store = createStore < storeModel > model

// Set up hot reloading
// https://easy-peasy.vercel.app/docs/recipes/hot-reloading.html
if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./model", () => {
      store.reconfigure(model)
    })
  }
}

export default store
