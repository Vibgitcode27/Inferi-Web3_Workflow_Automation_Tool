// api/feriActions.ts
import { toast } from "sonner";
import { handleUnauthorized } from "./utils";

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
    
    if (errorData.message === 'Unauthorized' || response.status === 401) {
      handleUnauthorized();
      return {
        error: true,
        message: 'Unauthorized',
        details: errorData,
      };
    }
    
    toast.error(errorData.message);
    return {
      error: true,
      message: 'Invalid data',
      details: errorData,
    };
  }
  
  let responseData = await response.json();
  
  if (responseData.length === 0) {
    toast.info('No feri found');
    responseData = [];
  }
  
  return responseData;
}

const getFeriById = async (feriId: string) => {
  try {
    const response = await fetch(`${PORT}/api/v1/feri/${feriId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      if (errorData.message === 'Unauthorized' || response.status === 401) {
        handleUnauthorized();
        return null;
      }
      
      toast.error(errorData.message || 'Failed to fetch feri');
      return null;
    }

    const responseData = await response.json();
    return responseData;
    
  } catch (error) {
    console.error('Network error:', error);
    toast.error('Network error. Please try again.');
    return null;
  }
};


const createFeri = async (feriName: string) => {
  const payload = {
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
    
    if (errorData.message === 'Unauthorized' || response.status === 401) {
      handleUnauthorized();
      return {
        error: true,
        message: 'Unauthorized',
        details: errorData,
      };
    }
    
    toast.error(errorData.message);
    return {
      error: true,
      message: 'Invalid data',
      details: errorData,
    };
  }
  
  toast.success('Feri created successfully');
  return await response.json();
}

export { getAllFeri, getFeriById , createFeri };