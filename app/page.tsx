import ClientLogo from "@/components/pages/home/ClientLogo"
import Hero from "@/components/pages/home/Hero"
import Services from "@/components/pages/home/Services"
import Work from "@/components/pages/home/Work"
import Products from "@/components/pages/home/Products"
import WhyChooseUs from "@/components/pages/home/WhyChooseUs"
import Testimonials from "@/components/pages/home/Testimonials"

function Page() {
  return (
    <main className="w-full">
      <Hero />
      <ClientLogo />
      <Services />
      <Work />
      <Products />
      <WhyChooseUs />
      <Testimonials />
    </main>
  )
}

export default Page

