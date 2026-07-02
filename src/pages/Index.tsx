import Nav from "@/components/home/Nav";
import Hero from "@/components/home/Hero";
import Metrics from "@/components/home/Metrics";
import Capabilities from "@/components/home/Capabilities";
import Infra from "@/components/home/Infra";
import CodeSnippet from "@/components/home/CodeSnippet";
import About from "@/components/home/About";
import Footer from "@/components/home/Footer";

const Index = () => {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pedro Murilo Maciel Gomes",
    alternateName: "Aratutec",
    jobTitle: "Software & AI Developer",
    url: "https://aratutec.org",
    sameAs: [
      "https://github.com/PedroMMGomes",
      "https://linkedin.com/in/pedrogomes600",
    ],
    email: "mailto:aratutec@gmail.com",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Capabilities />
        <Infra />
        <CodeSnippet />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
