import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ValidateResponse, LoginResponse, RegisterResponse, ChangePasswordResponse } from '../interfaces/Responses';

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<LoginResponse>;
    logout: () => void;
    register: (name: string, email: string, password: string, confirmPassword: string, description: string) => Promise<RegisterResponse>;
    change: (email: string, password: string, confirmPassword: string) => Promise<ChangePasswordResponse>;
    getTokenExpirationDate: () => Date;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string): Promise<LoginResponse> => {
        const response = await fetch('http://your-backend-url/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }
        const data: LoginResponse = await response.json();
        if (data.si) {
            const tokenLife = 60 * 1000; // 1 minute in milliseconds
            const expiresAt = new Date(Date.now() + tokenLife);
            localStorage.setItem('token', data.token);
            localStorage.setItem('expiresAt', expiresAt.toISOString());
            setUser({ email: data.user.email, name: data.user.name, description: data.user.description, token: data.token, expiresAt });
        }
        return data;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expiresAt');
    };

    const change = async (email: string, password: string, confirmPassword: string): Promise<ChangePasswordResponse> => {
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }
        const response = await fetch('http://your-backend-url/api/change', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, confirmPassword }),
        });
        if (!response.ok) {
            throw new Error('Change failed');
        }
        const data: ChangePasswordResponse = await response.json();
        return data;
    };

    const getTokenExpirationDate = () => {
        const expiresAt = localStorage.getItem('expiresAt');
        return expiresAt ? new Date(expiresAt) : new Date(2000, 1, 1);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, change, getTokenExpirationDate }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};