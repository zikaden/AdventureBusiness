import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import HomePageText from "../../assets/logo_name.png";
import HomePageGraphic from "../../assets/sittinghicker.png";
import Nparklogo from "../../assets/link_nationalpark.png";
import Nparkarcadia from "../../assets/link_arcadia.png";
import Nparkglacier from "../../assets/link_glacier.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10">
            {/* MAIN HEADER AND IMG*/}
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 md:mb-10"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
                {/* MAIN HEADER */}
                <div className="z-10 mt-32 md:basis-3/5 pb-10">
                    {/* HEADINGS */}
                    <motion.div
                        className="md:start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-9 before:-left-9 before:z-[-1] md:before:content-evolvetext">
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                        <p className="text-sm md:start mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum nisl eget magna facilisis, et auctor mi iaculis.</p>
                    </motion.div>
                    {/* ACTIONS */}
                    <motion.div
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}>
                        <ActionButton
                            setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="font-bold text-primary-500 text-sm underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* IMG */}
                <div className="mt-10 flex basis-1/2 justify-center md:z-10 md:ml-40 md:mt-40 md:justify-items-end">
                    <img src={HomePageGraphic}
                        alt="home-page-gaphic" />
                </div>
            </motion.div>
            {/* SPONSORS */}
            {
                isAboveMediumScreens && (
                    <div className=" bg-primary-100 py-1 shadow-md">
                        <div className="mx-auto w-5/6">
                            <div className="flex flex-row justify-between items-center mx-20">
                                <img src={Nparkglacier} alt="national-park-glacier" className="h-[20px]" />
                                <img src={Nparkarcadia} alt="national-park-arcadia" className="h-[20px]" />
                                <img src={Nparklogo} alt="national-park-logo" className="h-[80px]" />
                            </div>
                        </div>
                    </div>
                )
            }
        </section >
    )
}

export default Home