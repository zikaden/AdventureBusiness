import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo_nameshort.png"
import Link from "./link";

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

function Navbar({ selectedPage, setSelectedPage }: Props) {
    const flexBetween = "flex items-center justify-between"
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* Left Side */}
                        <img src={Logo} alt="logo" className="h-12 pt-4" />
                        {/* Right Side */}
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
                                <button>Become a Member</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar