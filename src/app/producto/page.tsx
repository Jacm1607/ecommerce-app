import DetailsProduct from "@/components/page/detailsProduct"
import { Toaster } from "@/components/ui/toaster"

export default function ProductHome({searchParams}:any) {
    const {producto} = searchParams
    return (
        <div className="grid grid-cols-6 mt-10 space-y-6 px-10">
            <DetailsProduct product={producto} />
            <Toaster />
        </div>
    )
}