

import ExpertQueryForm from "../WebsiteForms/ExpertQueryForm";
import Announcement from "./Announcement";
import SliderPage from "./SliderPage";
import EducationalStatistics from "./EducationalStatistics";

import ProgrammeListing from "./ProgrammeListing";
import Testimonial from "./Testimonial";
import WhyChosseUs from "./WhyChosseUs";
import ModelPage from "./ModelPage";
import SocialAppLinks from "./SocialAppLinks";



function Home() {








    return (
        <>

            <ModelPage />
            <SliderPage />
            <EducationalStatistics />

            <Announcement />
            <WhyChosseUs />

            <ProgrammeListing />



            <ExpertQueryForm />


            <SocialAppLinks />
            <Testimonial />







        </>
    );
}

export default Home;