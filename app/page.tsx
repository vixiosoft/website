import Hero from "@/components/pages/home/Hero"
import { Marquee } from "@/components/ui/marquee"
import { IMAGES } from "@/constants/assets"
import Image from "next/image"

function Page() {
  const productImages = Object.values(IMAGES)

  return (
    <main className="w-full">
      <Hero />

      {/* Product Image Marquee Showcase */}
      <section className="relative w-full overflow-hidden bg-white pb-24">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="flex w-full flex-col gap-2">
            {/* Row 1: Normal Order */}
            <Marquee
              className="py-0 [--duration:40s] [--gap:0.5rem]"
              pauseOnHover
            >
              {productImages.map((src, index) => (
                <div
                  key={`marquee-1-${index}`}
                  className="relative aspect-[16/10] w-[260px] shrink-0 overflow-hidden rounded-[1.5rem] bg-neutral-50 sm:w-[320px] md:w-[380px]"
                >
                  <div className="relative size-full overflow-hidden rounded-[1rem] bg-neutral-100">
                    <Image
                      src={src}
                      alt={`Cynigen Product Screenshot ${index + 1}`}
                      fill
                      priority={index < 3}
                      className="object-cover object-top transition-transform duration-500 select-none hover:scale-[1.02]"
                      sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 380px"
                    />
                  </div>
                </div>
              ))}
            </Marquee>

            {/* Row 2: Reverse Order */}
            <Marquee
              className="py-0 [--duration:40s] [--gap:1rem]"
              reverse
              pauseOnHover
            >
              {productImages.map((src, index) => (
                <div
                  key={`marquee-2-${index}`}
                  className="bg-neutral-50sm:w-[320px] relative aspect-[16/10] w-[260px] shrink-0 overflow-hidden rounded-[1.5rem] md:w-[380px]"
                >
                  <div className="relative size-full overflow-hidden rounded-[1rem] bg-neutral-100">
                    <Image
                      src={src}
                      alt={`Cynigen Product Screenshot ${index + 1}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 select-none hover:scale-[1.02]"
                      sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 380px"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
