import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = AuthContext.Provider;
const AuthConsumer = AuthContext.Consumer;

function useAuth() {
	const [authed, setAuthed] = useState(false);

	return {
		authed,
		login() {
			return new Promise((res) => {
				setAuthed(true);
				res();
			});
		},
		logout() {
			return new Promise((res) => {
				setAuthed(false);
				res();
			});
		},
	};
}
