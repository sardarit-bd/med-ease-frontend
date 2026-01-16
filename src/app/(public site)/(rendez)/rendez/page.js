import ContactFooter from "@/components/modules/about/ContactFooter";
import ConciergeriePage from "@/components/modules/rendez/ConciergeriePage";
import RdvGradientBar from "@/components/modules/rendez/RdvGradientBar";

const { default: TopHeader } = require("@/components/modules/rendez/TopHeader")
const { default: Header } = require("@/components/publicSite/publicHeader/Header")

const Rendez = () => {
    return (
        <div>
            <Header />
            <TopHeader />
            <RdvGradientBar />
            <ConciergeriePage />
            <ContactFooter />
        </div>
    )
}



export default Rendez;