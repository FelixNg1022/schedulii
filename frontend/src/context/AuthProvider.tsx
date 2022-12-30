import type { ReactElement } from "react";
import React from "react";
import { AuthContext } from "./AuthContext";
import type Props from "../types/Props";
import type { AppContextInterface } from "./AuthContext";

const AuthProvider = ({ children }: Props): ReactElement => {
    const [token, setToken] = React.useState(null);

    const handleLogin = async (): Promise<void> => {
        const request = await fetch("http://localhost:8080/login", {
            method: "POST",
            body: JSON.stringify({
                username: "schedulii-user"
            })
        });

        const data = await request.json();
        setToken(data.token);
    };

    const handleLogout = (): void => {
        setToken(null);
    };

    const value: AppContextInterface = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
