import React, { createContext, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
	return <UserContext.Provider value="Arif">{children}</UserContext.Provider>;
}

// export default function UserConsumer() {
// 	return useContext(UserContext);
// }
