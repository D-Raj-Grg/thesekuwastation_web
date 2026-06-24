import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Signatures } from "@/components/sections/signatures";
import { SekuwaPricing } from "@/components/sections/sekuwa-pricing";
import { FullMenu } from "@/components/sections/full-menu";
import { Story } from "@/components/sections/story";
import { Visit } from "@/components/sections/visit";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex w-full flex-1 flex-col">
        <Hero />
        <Signatures />
        <SekuwaPricing />
        <FullMenu />
        <Story />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
