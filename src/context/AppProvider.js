import { getListTeacher } from '../services/teacher.api.js'
import { format, parseISO, isValid } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react'
export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const [teachers, setTeachers] = useState(null);

    // Load Teacher
    async function loadTeachers() {
        try {
            const data = await getListTeacher();
            setTeachers(data)
        } catch (error) {
            console.error('Error loading Teachers:', error);
        }
    }
    useEffect(() => {
        loadTeachers();
    }, []);

    // FormatDate 
    function formatDate(date) {
        const dateObj = parseISO(date);
        if (isValid(dateObj)) {
            const formattedDate = format(dateObj, 'dd/MM/yyyy');
            return formattedDate// Kết quả: 20/02/2024 17:00:00
        } else {
            return '22/11/2002';
        }
    }
    return (
        <AppContext.Provider value={{ teachers, loadTeachers, formatDate }}>
            {children}
        </AppContext.Provider>
    )

}

export const useApp = () => {
    return useContext(AppContext);
};