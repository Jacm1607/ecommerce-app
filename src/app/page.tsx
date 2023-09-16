import AdsHome from "@/components/page/adsHome";
import BranHome from "@/components/page/brandHome";
import CarouselHome from "@/components/page/carouselHome";
import CategoryHome from "@/components/page/categoryHome";
import ListProductsHome from "@/components/page/listProductHome";

export default function Home() {
  return (
    <><CarouselHome />
    <CategoryHome />
    <BranHome />
    <AdsHome />
    <ListProductsHome />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main></>
  )
}
