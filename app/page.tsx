import { Button } from "@/components/ui/button";
import Image from "next/image";
import Whitesec from "../components/whitesec";
import Greensec from "../components/greensec";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Whitesec />
      <Greensec />
      <Footer />
    </div>
  );
}
