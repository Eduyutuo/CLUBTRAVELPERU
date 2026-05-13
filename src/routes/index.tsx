import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Tours } from "@/components/site/Tours";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Tours limit={3} />
      <Testimonials />
      <Contact />
    </>
  );
}
