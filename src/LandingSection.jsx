import { useEffect } from "react";
import HeroAsset from "./assets/HeroAsset.png";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	animate,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const COLORS = [
	"#FF4F00",
	"#FFBF00",
	"#00FFBF",
	"#00BFFF",
	"#72A0C1",
	"#B284BE",
];
function LandingSection() {
	const color = useMotionValue(COLORS[0]);
	const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
	const border = useMotionTemplate`2px solid ${color}`;
	const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

	useEffect(() => {
		animate(color, COLORS, {
			ease: "easeInOut",
			duration: 50,
			repeat: Infinity,
			repeatType: "mirror",
		});
	}, []);

	return (
		<motion.section
			className=" h-auto md:h-[90dvh] flex flex-col md:flex-row items-center justify-center p-6 md:p-24 gap-x-8 gap-y-8 w-dvw"
			style={{
				backgroundImage,
			}}
		>
			<article className="relative z-10 font-sans h-full flex flex-col justify-center gap-8 items-center md:items-start text-center md:text-left">
				<h1 className="text-3xl md:text-5xl font-bold text-white mt-4 sm:mt-0">
					Planning your commute was never this Easy!
				</h1>
				<p className="text-base md:text-lg text-zinc-300">
					Effortlessly explore routes, compare costs, and make
					informed travel decisions tailored to your preferences and
					budget
				</p>
				<motion.a
					href="#"
					className="flex items-center justify-center gap-4 group transition-all duration-500 text-base md:text-lg w-fit text-white font-bold py-2 px-4 rounded-full mt-2"
					style={{
						border,
						boxShadow,
					}}
				>
					Get Started with RouteRover{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-6 h-6 md:opacity-0 md:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
						/>
					</svg>
				</motion.a>
			</article>
			<article className="relative z-10">
				<img
					src={HeroAsset}
					className="h-full w-80 sm:w-[400px] md:w-[600px] max-w-[600px]"
				></img>
			</article>
			<div className="z-0 absolute inset-0">
				<Canvas>
					<Stars radius={50} count={2500} factor={4} fade speed={2} />
				</Canvas>
			</div>
		</motion.section>
	);
}

export default LandingSection;
