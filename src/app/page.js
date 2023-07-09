import HeroBanner from "@/components/Hero_Banner/HeroBanner"
import Wrapper from "@/components/Wrapper/Wrapper"
import ProductCard from "@/components/Product/ProductCard"

export default function Home() {
  return (
   <>
   <main>
   
    <HeroBanner />

    
    <Wrapper>
      {/*heading and paragraph start*/}
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Heading</div>
        <div className="text-md md:text-xl">lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </div>
      {/*heading and paragraph end*/}

      {/*Product grid Start*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        <ProductCard />
      </div>
      {/*Product grid End*/}
    </Wrapper>
      

   </main>

   </>
  )
}
