import { notification } from 'antd';

const PORT = "http://localhost:8020";

const getAllFeri = async () => {
    const response = await fetch(`${PORT}/api/v1/feri/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.log('Error', errorData.message);
        if(errorData.message === 'Unauthorized') {
            notification.error({
                message: 'Error',
                description: 'Unauthorized access. Please log in again.',
            });
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
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
    let responseData = await response.json();

    if(responseData.length === 0) {
        notification.info({
            message: 'Info',
            description: 'No feri found',
        });
        responseData = [];
    }
    return responseData;
}

const createFeri = async (feriName : string) => {

    const payload ={
        name: feriName,
        status: false,
        availableTrigerId: "", 
        triggerMetadata: {},
        actions: [],
    }

    const response = await fetch(`${PORT}/api/v1/feri/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.log('Error', errorData.message);
        if(errorData.message === 'Unauthorized') {
            notification.error({
                message: 'Error',
                description: 'Unauthorized access. Please log in again.',
            });
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
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
    notification.success({
        message: 'Success',
        description: 'Feri created successfully',
    });
}

export { getAllFeri , createFeri };