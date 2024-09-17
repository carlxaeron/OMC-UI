import Footer from "./Footer";
import Header from "./Header";

export default function LandingTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section>
        <Header />
        <div className="lg:container mx-auto lg:my-4">
          {children}
        </div>
        <Footer />
      </section>
    </>
  );
}