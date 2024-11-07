import { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
    const [message, setMessage] = useState(null);

    const showNotification = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), 3000); // Hide after 3 seconds
    };

    return (
        <NotificationContext.Provider value={{ message, showNotification }}>
            {children}
        </NotificationContext.Provider>
    );
}

export function useNotification() {
    return useContext(NotificationContext);
}
