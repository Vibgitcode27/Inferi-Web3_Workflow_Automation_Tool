// api/flowActions
import { toast } from "sonner";
import { handleUnauthorized } from "./utils";

const PORT = "http://localhost:8020";

const getCatalog = async () => {
  const response = await fetch(`${PORT}/api/v1/catalog/`, {
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
    toast.info('No available actions or triggers found');
    responseData = [];
  }
  
  return responseData;
}

const updateFeriFlow = async (feriId: string, flowData: any) => {
  try {
    const response = await fetch(`${PORT}/api/v1/feri/${feriId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(flowData),
    });

    // Handle non-200 responses
    if (!response.ok) {
      const errorData = await response.json();

      if (response.status === 401 || errorData.message === "Unauthorized") {
        handleUnauthorized();
        return {
          error: true,
          message: "Unauthorized",
          details: errorData,
        };
      }

      toast.error(errorData.error || "Failed to update Feri flow");
      return {
        error: true,
        message: errorData.error || "Request failed",
        details: errorData,
      };
    }

    const responseData = await response.json();
    toast.success("Feri flow updated successfully!");

    return {
      error: false,
      data: responseData.data,
      message: responseData.message,
    };
  } catch (error: any) {
    console.error("Error updating feri flow:", error);
    toast.error("Something went wrong while updating the Feri flow");
    return {
      error: true,
      message: error.message || "Internal Error",
    };
  }
};


export { getCatalog , updateFeriFlow };