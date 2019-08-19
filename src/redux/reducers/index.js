import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import account from "./account";
import shop from "./shop";

// const rootConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['shop']
// }

const cartConfig = {
  key: "shop",
  storage,
  whitelist: ["cartItems"]
};

export default combineReducers({
  account,
  shop: persistReducer(cartConfig, shop)
});

// export default persistReducer(rootConfig, reducers)
