import useLocomotiveScroll from "@/utils/hooks/useLocomotiveScroll";
import  CardHoverEffectDemo  from "./CardHoverEffectDemo";
import { HeroHighlightDemo } from "./HeroHighlightDemo";
import { NavbarReact } from "./NavbarReact";
import About from "./About";
import { ContactForm } from "./Contact";
import { GlobalProvider } from "@/context/GlobalContext";

const Main = () => {

  useLocomotiveScroll();
  return (
    <main>
      <GlobalProvider>
        <NavbarReact />
        <HeroHighlightDemo />
        <About />
        <CardHoverEffectDemo />
        <ContactForm />
      </GlobalProvider>
    </main>
  );
};

export default Main;
