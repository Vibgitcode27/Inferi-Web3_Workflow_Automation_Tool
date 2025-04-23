import z from 'zod';
import { notification } from 'antd';
import { AppDispatch } from 'lib/store';
import { updateUser } from 'lib/features/user/userSlice';

const PORT = "http://localhost:8020";
interface LoginData {
    email: string;
    password: string;
}

interface LoginError {
    error: true;
    message: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    details: Record<string, any>;
}

const login = async (
    data: LoginData,
    dispatch: AppDispatch
): Promise<LoginError | void> => {
    const parsedData = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    }).safeParse(data);

    if (!parsedData.success) {
        notification.error({
            message: 'Error',
            description: 'Password must be at least 6 characters long',
        });
        return {
            error: true,
            message: 'Invalid data',
            details: parsedData.error.format(),
        };
    }

    const response = await fetch(`${PORT}/api/v1/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData.data),
    });

    if (!response.ok) {
        const errorData = await response.json();
        notification.error({
            message: 'Error',
            description: errorData.message,
        });
        return {
            error: true,
            message: 'Invalid data',
            details: errorData,
        };
    }

    const responseData = await response.json();
    localStorage.setItem('token', responseData.token);
    dispatch(updateUser({
        email: parsedData.data.email,
        name: "",
        token: responseData.token,
    }));
    localStorage.setItem('user', JSON.stringify(responseData.user));
    notification.success({
        message: 'Success',
        description: 'Login successful',
    });
};


interface SignUpData {
    email: string;
    name: string;
    password: string;
}

interface SignUpError {
    error: true;
    message: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    details: Record<string, any>;
}

const signUp = async (
    data: SignUpData,
    dispatch: AppDispatch
): Promise<void | SignUpError> => {
    const parsedData = z.object({
        email: z.string().email(),
        name: z.string().min(1),
        password: z.string().min(6),
    }).safeParse(data);

    if (!parsedData.success) {
        notification.error({
            message: 'Error',
            description: 'Password must be at least 6 characters long',
        });
        return {
            error: true,
            message: 'Invalid data',
            details: parsedData.error.format(),
        };
    }

    const response = await fetch(`${PORT}/api/v1/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData.data),
    });

    if (!response.ok) {
        const errorData = await response.json();
        notification.error({
            message: 'Error',
            description: errorData.message,
        });
        return {
            error: true,
            message: 'Invalid data',
            details: errorData,
        };
    }

    const responseData = await response.json();
    localStorage.setItem('token', responseData.token);
    localStorage.setItem('user', JSON.stringify(responseData.user));

    dispatch(updateUser({
        email: parsedData.data.email,
        name: parsedData.data.name,
        token: responseData.token,
    }));

    notification.success({
        message: 'Success',
        description: 'Registration successful',
    });

    return;
};

export {login , signUp};