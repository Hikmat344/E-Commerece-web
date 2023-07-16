import Image from "next/image";
import prom1 from '/public/images/prom1.jpg'
import prom3 from '/public/images/prom3.jpg'
import prom4 from '/public/images/prom4.jpg'


export default function Promotion() {
  return (
    <div className=" mx-24">
        <div className="">
            <p className="flex text-sm font-bold leading-none text-blue-800  justify-center mt-20">PROMOTIONS</p>
            <h2 className="flex justify-center text-black mt-5 text-4xl font-bold ">Our Promotions Events</h2>
        </div>
        <div className="flex mt-10 ">
            <div>
                <div className="flex w-full max-w-screen-sm  h-56 bg-gray-300 jutify-between items-center shadow-md shadow-slate-500">
                    <div className="max-w-sm w-full px-10">
                    <h1 className="text-black text-center text-2xl   justify-center font-bold"> GET UP TO <span>60%</span> </h1>
                    <p className="justify-center text-center">For the summer season</p>
                    </div>
                    <div className="max-w-sm w-full">
                    <Image width={300} height={248} src={prom1} alt="image" />
                    </div>

                </div>
                <div className="flex w-full max-w-screen-sm  h-36 bg-black items-center text-white mt-5 shadow-md shadow-slate-500">
                    <div className="justify-center items-center text-center px-56">
                    <h3 className=" text-center text-2xl   flex justify-center font-bold w-60 h-5">GET 30% OFF</h3>
                    <p className="justify-center text-center text-xs w-60 mt-5">USE PROMOCODE</p>
                    <button className="justify-center w-60 h-10 mt-5 bg-slate-600 rounded-sm">DINEWEEKENDSALE</button>
                    </div>

                </div>


            </div>
            <div className="flex px-3">
                <div className="flex flex-col h-110 max-w-sm w-auto bg-orange-100 shadow-md shadow-slate-500">
                    <div className=" items-center mt-5">
                        <p className="justify-start px-8 text-xs">Flex Sweatshirt</p>
                        <p className="px-8 mt-2"><span className="line-through">$100.00</span> <span className="font-bold px-1">$75.00</span></p>

                    </div>
                    <div>
                        <Image className="mt-14" src={prom3} width={250} height={250} alt="shirt image" />
                    </div>

                </div>
                <div className="px-5">
                <div className="flex flex-col h-110 max-w-sm w-auto bg-gray-300 shadow-md shadow-slate-500">
                    <div className=" items-center mt-5">
                        <p className="justify-start px-8 text-xs">Flex Push Button Bomber</p>
                        <p className="px-8 mt-2"><span className="line-through">$225.00</span> <span className="font-bold px-1">$190.00</span></p>

                    </div>
                    <div>
                        <Image className="mt-14" src={prom4} width={250} height={250} alt="shirt image" />
                    </div>

                </div>

                </div>
            </div>
        </div>


    </div>
  )
}