import ListSubcategory from "@/components/page/listSubcategory";

export default function CategoryHome({ params }: any) {
  const { categoria } = params;

  return (
    <>
      <ListSubcategory categoria={categoria} />
    </>
  )
}

