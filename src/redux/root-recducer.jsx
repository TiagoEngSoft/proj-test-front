import { combineReducers } from "redux";
import userSlice from "./user/userSlice";
import themeSlice from "./theme/themeSlice";
import homeSlice from './Pages/Home/homeSlice'

const rootReducer = combineReducers({ themeSlice, userSlice,  });

export default rootReducer;