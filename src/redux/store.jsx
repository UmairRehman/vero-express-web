import { Middleware, configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import rootReducer from "./rootReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // default to localStorage for web

// Persist configuration
const persistConfig = {
  key: "root", // Key for the persisted state
  storage, // Define the storage engine
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware setup
const addLoggerMiddleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore redux-persist actions
    },
  }).concat(reduxLogger);
};

// Configure the store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: addLoggerMiddleware,
});

// Create the persistor
export const persistor = persistStore(store);

// You can also export the types if needed
export const AppDispatch = store.dispatch;
export const RootState = store.getState();
