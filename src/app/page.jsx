import Hero from "@/app/components/hero";
import Branding from "@/app/components/branding";
import CTASec from "./components/ctaSec";
import FooterHome from "./components/footerHome";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex bg-[var(--color-bg)] w-full justify-center items-center">
                <Hero/>
            </div>
            <div className="flex justify-center items-center">
                <Branding/>
            </div>
            <div className="flex bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] w-full justify-center items-center">
                <CTASec/>
            </div>
            <div className="w-full px-5 py-17">
                <FooterHome/>
            </div>
        </div>
    );
}