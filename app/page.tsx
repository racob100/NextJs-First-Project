import { Button } from "@/components/ui/button";
import Image from "next/image";
import Whitesec from "../components/whitesec";
import Greensec from "../components/greensec";
import Footer from "../components/footer";
import HypeSection from "../components/hypesection";
import Cardsection from "../components/cardsection";

export default function Home() {
  return (
    <div>
      <HypeSection />
      <Cardsection />
      <Whitesec />
      <Greensec />
      <Footer />
    </div>
  );
}
