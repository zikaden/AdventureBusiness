import { SelectedPage } from "../../shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import CantactUsGraphic from "../../assets/contact.jpg.png"
import HText from "../../shared/HText"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function ContactUs({ setSelectedPage }: Props) {

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-3 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* HEADINGS */}
                <motion.div
                    className="w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >

                    <HText><span className="text-primary-500">JOIN NOW </span>FOR AN UNIQE ADVENTURE</HText>
                    <p className="my-5">In at maximus odio. Donec sed vehicula tellus. Integer aliquam at ante in aliquam. Mauris a ipsum augue. Nam mattis velit id malesuada accumsan. Vivamus in mauris nisi. Morbi pharetra vitae erat sit amet aliquet.</p>
                </motion.div>
                {/* FORM */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <form target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/fac57df4088f9b0dfad3de62907ff040"
                            method="POST"
                        >
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })} />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is requred."}
                                    {errors.name.type === "maxLength" && "The max length is 100 character."}
                                </p>
                            )}
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })} />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is requred."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}
                            <textarea
                                className={inputStyles}
                                rows={16}
                                cols={50}
                                placeholder="MESSAGE"
                                {...register("message", {
                                    required: true,
                                    maxLength: 1300,
                                })} />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && "This field is requred."}
                                    {errors.message.type === "maxLength" && "The max length is 1300 character."}
                                </p>
                            )}
                            <button
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                                type="submit">SUBMIT</button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}>
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[30] md:before:content-evolvetext">
                            <img className="w-full" src={CantactUsGraphic} alt="contact-us-graphic" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs