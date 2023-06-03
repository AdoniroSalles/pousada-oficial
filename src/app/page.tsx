import Footer from "./Components/Footer/Footer";
import Section from "./Components/Section/Section";
import SectionInfo from "./Components/Section/SectionInfo";
import SectionLocation from "./Components/Section/SectionLocation";
import SectionSlick from "./Components/Section/SectionSlick";
import SectionTop from "./Components/Section/SectionTop";
import TopImage from "./Components/TopImage/TopImage";


const Home = () => {
	return (
		<>
			<TopImage />
			<Section>
				<SectionTop />
			</Section>
			<SectionInfo />
			<SectionSlick />
			<Section>
				<SectionLocation/>
			</Section>	
			<Footer/>
		</>
	)
}

export default Home;