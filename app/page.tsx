import ClientLogo from "@/components/pages/home/ClientLogo"
import Hero from "@/components/pages/home/Hero"
import Services from "@/components/pages/home/Services"
import { IMAGES } from "@/constants/assets"

function Page() {
  const productImages = Object.values(IMAGES)

  return (
    <main className="w-full">
      <Hero />
      <ClientLogo />
      <Services />
    </main>
  )
}

export default Page
