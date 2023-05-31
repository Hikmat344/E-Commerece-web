import Image from "next/image";
import prod1 from '/public/images/prod1.jpg';

export default function Products() {
  return (
    <div className="mt-20">
        <div className="">
            <p className="flex text-sm font-bold leading-none text-blue-800  justify-center mt-20">PRODUCTS</p>
            <h2 className="flex justify-center text-black mt-5 text-4xl font-bold ">Check What We Have</h2>
        </div>

        <div className="flex space-x-5 mt-10 mx-20">
            <div className=" h-32 hover:scale-110 shadow-md shadow-slate-500 group duration-500">
                <Image src={prod1} width={350} height={350} alt="product1" />
                <p className="justify-center text-black mt-3 text-1xl font-bold">Brushed Raglan Sweatshirt</p>
                <span className="font-bold">$195</span>
               
            </div>
            
            <div>

            </div>
            <div>

            </div>

        </div>

    </div>
  )
}
