"use client";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SessionProvider>{children}</SessionProvider>
            </PersistGate>
        </Provider>
    );
};
