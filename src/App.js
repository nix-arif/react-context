import { createContext } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
// import { UserProvider } from './components/userContext';

export const UserContext = createContext();
const UserProvider = UserContext.Provider;

function App() {
	return (
		<div className="App">
			<UserProvider value={'Arif'}>
				<ComponentA />
			</UserProvider>
		</div>
	);
}

export default App;
