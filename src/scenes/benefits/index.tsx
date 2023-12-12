import { HomeModernIcon, UserGroupIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import HickerGraphic from "../../assets/hicker.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Modern Cabin Feeling",
        description: "In at maximus odio. Donec sed vehicula tellus. Integer aliquam at ante in aliquam. Mauris a ipsum augue. Nam mattis velit id malesuada accumsan. Vivamus in mauris nisi. Morbi pharetra vitae erat sit amet aliquet."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Run By Professional Guides",
        description: "Sed feugiat est at dui convallis, eu ornare arcu molestie. Cras ornare turpis eu metus finibus egestas. Nunc volutpat semper consequat. Nullam eros nulla, ultricies nec est in, consectetur porta nisi."
    },
    {
        icon: <GlobeEuropeAfricaIcon className="h-6 w-6" />,
        title: "Estabished around the World",
        description: "Duis finibus malesuada tellus eu interdum. Phasellus dolor turpis, dapibus quis condimentum quis, accumsan vulputate elit. Fusce interdum arcu dignissim finibus malesuada. Fusce semper vehicula tincidunt. Vestibulum at varius est."
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {

    return <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/*HEADER */}
            <motion.div
                className="md:w-3/5 md:my-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}>
                <HText>MORE THAN JUST AN ADVENTURE</HText>
                <p className="my-5 test-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris non risus pretium aliquet vitae vulputate risus. Aenean pulvinar quam vel lacus tincidunt suscipit. Fusce sollicitudin ex sit amet felis laoreet, sit amet fermentum erat lacinia. Nullam ut enim sapien. Ut at sapien ac ipsum tristique bibendum.
                </p>
            </motion.div>
            {/*BENEFITS */}
            <motion.div className="items-center justify-between gap-8 mt-5 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/*GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-20 md:flex">
                {/*IMG*/}
                <img className="mx-auto md:w-1/3" src={HickerGraphic} alt="benefits-page-graphic" />
                {/*DESCRIPTION*/}
                <div>
                    {/*TITLE*/}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY {" "}
                                    <span className="text-primary-500">EXPLORERS</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/*DESCRIPTION*/}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <p className="my-5">Mauris molestie convallis commodo. Donec volutpat fringilla justo, at semper mauris tristique nec. Proin eget odio at velit tempor hendrerit. Cras bibendum enim vel eros mattis dictum. Praesent condimentum lorem sed diam hendrerit auctor a id turpis. Sed vel justo sed nisi cursus imperdiet. Phasellus id leo tortor. </p>
                        <p className="mb-5">Duis purus enim, placerat a lacinia viverra, luctus sed diam. Aliquam erat volutpat. Integer sollicitudin bibendum nisi ut dapibus. Aenean vel neque mattis, pretium lorem ac, facilisis lacus. Nullam luctus tincidunt nisi.</p>
                    </motion.div>
                    {/*BUTTON*/}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-stars">
                            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
};

export default Benefits