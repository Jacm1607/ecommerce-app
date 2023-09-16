import ListSubcategory from "@/components/page/listSubcategory";

export default function CategoryHome({ searchParams }: any) {
  const { categoria } = searchParams;
  console.log(categoria);
  
  return (
    <>
      <ListSubcategory categoria={categoria} />
    </>
  )
}

