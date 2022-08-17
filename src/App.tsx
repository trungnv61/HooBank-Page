import styles from "./style/style";
import {
    Billing,
    Business,
    CardDetail,
    Client,
    CTA,
    Footer,
    Hero,
    Navbar,
    Stats,
    Testimonials,
} from "./components";

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div
                className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
            >
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <CardDetail />
                    <Testimonials />
                    <Client />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
