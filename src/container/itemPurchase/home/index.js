import '../../../assets/css/style-block1.css';
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import CTA from '../../../component/cta';
import BannerHome from '../../../component/banner-home';
import ServiceSection from '../../../component/home/services';
import TopServices from '../../../component/home/topServices';
import Craving from '../../../component/home/craving';
import PrivacySec from '../../../component/home/privacy';
import FreeDelivery from '../../../component/home/freeDevilery';
import Testimonials from '../../../component/shared/testiminial';
import DownloadApp from '../../../component/shared/downapp';
import Newsletter from '../../../component/shared/subscribe';
import FaqSection from '../../../component/shared/faq';
import SubHeader from '../../../component/shared/subHeader';

function Home() {
    return (
        <div className="App">
            <Header />
            <SubHeader />
            <BannerHome />
            <ServiceSection />
            <TopServices />
            <Craving />
            <CTA />
            <PrivacySec />
            <FreeDelivery />
            <Testimonials />
            <DownloadApp />
            <Newsletter />
            <FaqSection />
            <Footer />
        </div>
    );
}

export default Home;
