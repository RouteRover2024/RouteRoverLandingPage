import LandingSection from "./LandingSection";
import RouteRoverLogoText from "./assets/RouteRoverLogoText.svg";

function App() {
	return (
		<main className="max-w-7xl border-2 border-red-400 m-auto p-8">
			<img src={RouteRoverLogoText} alt="RouteRover" className="h-8 self-center mb-8"/>
			<LandingSection />
		</main>
	);
}

export default App;
