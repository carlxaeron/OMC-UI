import Footer from "./Footer";
import Header from "./Header";
import MenuComponent from "./MenuComponent";

export default function LandingTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section>
        <Header />
        <div className="lg:container mx-auto lg:my-4">
          <MenuComponent type='aside' />
          {children}
        </div>
        <Footer />
      </section>
    </>
  );
}