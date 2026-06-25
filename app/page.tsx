import ClientLogo from "@/components/pages/home/ClientLogo"
import Hero from "@/components/pages/home/Hero"
import { IMAGES } from "@/constants/assets"

function Page() {
  const productImages = Object.values(IMAGES)

  return (
    <main className="w-full">
      <Hero />
      <ClientLogo />
    </main>
  )
}

export default Page
