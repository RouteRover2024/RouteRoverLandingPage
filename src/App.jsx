import LandingSection from "./LandingSection";
import RouteRoverLogoText from "./assets/RouteRoverLogoText.svg";


function App() {
	return (
		<>
			<main className="w-dvw h-dvh overflow-x-hidden bg-[#020617]">
				<img
					src={RouteRoverLogoText}
					alt="RouteRover"
					className="h-8 self-center mt-8 mx-auto"
				/>
				<LandingSection />
			</main>
		</>
	);
}

export default App;
