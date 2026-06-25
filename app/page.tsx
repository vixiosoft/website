import Hero from "@/components/pages/home/Hero"
import { IMAGES } from "@/constants/assets"

function Page() {
  const productImages = Object.values(IMAGES)

  return (
    <main className="w-full">
      <Hero />
    </main>
  )
}

export default Page
