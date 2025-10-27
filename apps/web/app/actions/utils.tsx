// utils/handleUnauthorized.ts
import { toast } from "sonner";

export const handleUnauthorized = () => {
  toast.error("Session expired! Please login again.");
  localStorage.removeItem('token');
  setTimeout(() => {
    window.location.href = '/login';
  }, 2000);
};