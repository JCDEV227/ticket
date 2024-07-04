import { HeaderHome } from "@/components/headerHome/page";
import { MainHome } from "@/components/mainHome/page";
import { Footer } from "@/components/footer/page";
import { Call } from "@/components/call/page";

export default function Home() {
  return (
      <>
        <HeaderHome />
        <MainHome />
        <Footer />
        <Call />
      </>
    );
}
