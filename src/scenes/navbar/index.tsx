import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo_nameshort.png";
import Link from "./link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/UseMediaQuery";
import ActionButton from "../../shared/ActionButton";


type Props = {
    isTopOfPage: boolean;
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props) {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const navBarBg = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

    return (
        <nav>
            <div className={`${navBarBg} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* Left Side */}
                        <img src={Logo} alt="logo" className="h-12 pt-4" />
                        {/* Right Side */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                {/* Inner Right Side */}
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link
                                        page="Our Tours"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link
                                        page="Contact us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                </div>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <p>Sign In</p>
                                    <ActionButton
                                        setSelectedPage={setSelectedPage}
                                    >Become a Member</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="bg-secondary-500 rounded-full p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* Mobile Menu Modal */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* close icon mobile*/}
                    <div className="flex justify-end p-12">
                        <button
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    {/* menu items mobile*/}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link
                            page="Our Tours"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link
                            page="Contact us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar