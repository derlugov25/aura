import { DemoBackgroundPaths } from "@/components/demo-background-paths";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { Benefits } from "@/components/sections/benefits";
import { Pricing } from "@/components/sections/pricing";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <DemoBackgroundPaths />
      <WhatWeDo />
      <Benefits />
      <Pricing />
      <Footer />
    </>
  );
}
