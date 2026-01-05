import { Outlet } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Nav } from './components/Nav/Nav';
import { MainContent } from './components/MainContent/MainContent';

function App() {
	return (
		<>
			<Layout>
				<Nav />
				<MainContent>
					<Outlet />
				</MainContent>
			</Layout>
		</>
	);
}

export default App;
