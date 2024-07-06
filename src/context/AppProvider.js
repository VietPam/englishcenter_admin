import React, { useContext, useEffect, useState } from 'react'
export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const [courses, setCourses] = useState(null);
    const [students, setStudents] = useState(null);
    const [teachers, setTeachers] = useState(null);
    const [levels, setLevels] = useState(null);
    const [classes, setClasses] = useState(null);
    const [rooms, setRooms] = useState(null);
}

export const useApp = () => {
    return useContext(AppContext);
};