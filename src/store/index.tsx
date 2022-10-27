import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import usersReducer from "./usersSlice";
import eventsReducer from "./eventsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    events: eventsReducer,
  },
});
