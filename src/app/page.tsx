import AdsHome from "@/components/ui/page/adsHome";
import BranHome from "@/components/ui/page/brandHome";
import CarouselHome from "@/components/ui/page/carouselHome";
import CategoryHome from "@/components/ui/page/categoryHome";

export default function Home() {
  return (
    <><CarouselHome />
    <CategoryHome />
    <BranHome />
    <AdsHome />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main></>
  )
}
