import { Player, Controls } from "@lottiefiles/react-lottie-player";
import GIFAnimation from "./assets/LandingAnimation.json";

function LandingSection() {
	return (
		<section className="h-auto sm:h-[70dvh] flex flex-col sm:flex-row items-center justify-center sm:p-16 gap-x-8 gap-y-8">
			<article className="font-sans h-full flex flex-col justify-center gap-6">
				<h1 className="text-3xl sm:text-5xl font-bold">
					Planning your commute was never this Easy!
				</h1>
				<p className="text-base sm:text-lg text-zinc-700">
					Effortlessly explore routes, compare costs, and make
					informed travel decisions tailored to your preferences and
					budget
				</p>
				<a
					href="#"
					className="flex items-center justify-center gap-4 group transition-all text-base sm:text-lg w-fit bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
				>
					Get Started with RouteRover{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all sm:visible invisible"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</article>
			<article>
				<Player
					autoplay
					loop
					src={GIFAnimation}
					className="h-full min-w-80 max-w-[900px] backdrop-blur-sm"
				></Player>
			</article>
		</section>
	);
}

export default LandingSection;
