import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Browse from '@/views/browse';
// import View from '@/views/view';
import PlotSaleLandingPage_RW4CA from './components/openv0_generated/PlotSaleLandingPage_RW4CA/PlotSaleLandingPage_RW4CA_1721648947396';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<main className="App">
			<div className={darkMode ? "dark" : ""}>
				<div className="min-h-screen bg-[#f5f5f5] dark:bg-[#050505] ">

					<BrowserRouter>
						<Routes>
							{/* <Route path="/" element={<Browse />} /> */}
							<Route path="/home" element={<PlotSaleLandingPage_RW4CA />} />
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</main>
	);
}

export default App;
