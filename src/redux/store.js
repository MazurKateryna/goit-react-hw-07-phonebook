import app from "../redux/contacts/contactsReducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { app },
});

export default store;
