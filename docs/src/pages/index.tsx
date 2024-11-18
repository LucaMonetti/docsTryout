import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import "./index.css";
import { useEffect } from "react";

// function HomepageHeader() {
// 	const { siteConfig } = useDocusaurusContext();
// 	return (
// 		<header className={clsx("hero hero--primary", styles.heroBanner)}>
// 			<div className='container'>
// 				<Heading as='h1' className='hero__title'>
// 					{siteConfig.title}
// 				</Heading>
// 				<p className='hero__subtitle'>{siteConfig.tagline}</p>
// 				<div className={styles.buttons}>
// 					<Link
// 						className='button button--secondary button--lg'
// 						to='/docs/intro'>
// 						Tutta la documentazione
// 					</Link>
// 				</div>
// 			</div>
// 		</header>
// 	);
// }

function HeroSection() {
	useEffect(() => {
		let element = document.querySelector("#terminal");
		console.log(element);
		var str = element.innerHTML.toString();
		var i = 0;
		element.innerHTML = "";

		setTimeout(function () {
			var se = setInterval(function () {
				i++;
				element.innerHTML = str.slice(0, i) + "|";
				if (i == str.length) {
					clearInterval(se);
					element.innerHTML = str;
				}
			}, 5);
		}, 0);
	});

	return (
		<div className='hero_container'>
			<div id='terminal'>
				<p className='line'>
					{" "}
					<span className='command-base'>Group_Name</span>: "
					<span className='command-value'>TechWave</span>"
				</p>
				<p className='line'>
					{" "}
					<span className='command-base'>Group_Description</span>: "
					<span className='command-value'>
						Gruppo 5 del corso di Ingegneria del Software.
					</span>
					"
				</p>
				<p className='line'>
					{" "}
					<span className='command-base'>Stakeholder</span>: "
					<span className='command-value'>BlueWind</span>"
				</p>
				<p className='line'>
					{" "}
					<span className='command-base'>Project_Name</span>: "
					<span className='command-value'>
						Requirement Tracker - Plug-in VSCode
					</span>
					"
				</p>
				<p className='line'>
					{" "}
					<span className='command-base'>Available_Pages</span>: [
					<a href='/docs/Candidatura/'>Candidatura</a>,{" "}
					<a href='/docs/RTB/'>RTB</a>, <a href='/docs/PB/'>PB</a>]
				</p>
				<p className='line'>
					{" "}
					<span className='command-base'>Devs</span>: [
					<a href='mailto:agnese.carraro@studenti.unipd.it'>
						Carraro Agnese
					</a>
					,
					<a href='mailto:riccardo.dalbianco@studenti.unipd.it'>
						Dal Bianco Riccardo
					</a>
					,
					<a href='mailto:giulia.marcon.6@studenti.unipd.it'>
						Marcon Giulia
					</a>
					,
					<a href='mailto:luca.monetti.1@studenti.unipd.it'>
						Monetti Luca
					</a>
					,
					<a href='mailto:gaia.pistori@studenti.unipd.it'>
						Pistori Gaia
					</a>
					,
					<a href='mailto:andrea.piola@studenti.unipd.it'>
						Piola Andrea
					</a>
					,
					<a href='mailto:manuelfelipe.vasquez@studenti.unipd.it'>
						Vasquez Manuel Felipe
					</a>
					]
				</p>
				<p className='line'>
					{" "}
					<span className='command-base'>HAVE A NICE DAY :-)</span>
				</p>
			</div>
		</div>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description='Description will go into a meta tag in <head />'>
			<main>
				<HeroSection />
			</main>
		</Layout>
	);
}
