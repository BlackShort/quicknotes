import axios from "axios";
import toast from 'react-hot-toast'; 
import {server} from '../main';

export const fetchNotes = async () => {
    try {
        const response = await axios.get(`/notes/all`, {
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            // toast.success(response.data.message);
            return response.data.notes;
        }
    } catch (error) {
        console.error(error)
    }
};

export const getNote = async (noteid) => {
    try {
        const response = await axios.get( `/api/v1/notes/${noteid}`  , {
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            return response.data.note;
        }
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

export const Logout = async (setIsAuthenticated) => {
    try {
        const response = await axios.get(`/api/v1/users/logout`, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            toast.success(response.data.message);

            // Clear authentication state from localStorage
            localStorage.removeItem('isAuthenticated');
            setIsAuthenticated(false);
        }
    } catch (error) {
        toast.error(error.response?.data?.message || 'An error occurred during logout');
        setIsAuthenticated(false);
    }
};  

export const addNotes = async (noteInfo) => {
    try {
        const response = await axios.post(`/api/v1/notes/new`, noteInfo, {
            headers: {
                "Content-Type": 'application/json',
            },
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            toast.success(response.data.message);
        }
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

export const deleteNotes = async (noteid) => {
    try {
        const response = await axios.delete(`/api/v1/notes/${noteid}`, {
            headers: {
                "Content-Type": 'application/json',
            },
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            toast.success(response.data.message);
        }
    } catch (error) {
        toast.error(response.data.message);
    }
};