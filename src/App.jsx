import LandingSection from "./LandingSection";
import Features from "./Features";
import Conclusion from "./Conclusion";
import Footer from "./Footer";
import RouteRoverLogoText from "./assets/RouteRoverLogoText.svg";

function App() {
	return (
		<main className="w-dvw overflow-x-hidden bg-[#020617]">
			<img
				src={RouteRoverLogoText}
				alt="RouteRover"
				className="h-12 self-center mt-8 mx-auto"
				style={{ filter: "drop-shadow(0 4px 8px #333399)" }}
			/>
			<LandingSection />
			<Features />
			<Conclusion />
			<Footer />
		</main>
	);
}

export default App;
