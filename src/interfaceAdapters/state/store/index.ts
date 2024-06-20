import mainMiddleware from "@/interfaceAdapters/state/middlewares/mainMiddleware";
import rootReducer from "@/interfaceAdapters/state/reducers";
import { Tuple, configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  middleware: () =>
    new Tuple(  
      mainMiddleware
    ),
  devTools: false,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
