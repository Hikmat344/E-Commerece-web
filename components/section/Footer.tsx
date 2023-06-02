import Image from "next/image"
import logo from '/public/images/Logo.jpg';
import { Facebook , Twitter , Linkedin} from "lucide-react";

//c3c0s@786

export const Footer = () => {
  return (

    <div>
        <div className="mx-28 mt-40">
            <div className="max-w-sm w-full">
                <Image src={logo} className="w-140 h-25" alt="logo" />

                <p className="flex justify-center text-justify text-sm mt-8 w-64">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
            </div>
            {/* social icons */}
            <div className="mt-8 max-w-sm w-full flex items-center space-x-5">
                <div className="bg-gray-200 w-8 h-8 rounded-sm flex justify-center items-center hover:cursor-pointer ">
                  <Twitter />
                </div>
                <div className="bg-gray-200 w-8 h-8 rounded-sm flex justify-center items-center hover:cursor-pointer">
                  <Facebook />
                </div>
                <div className="bg-gray-200 w-8 h-8 rounded-sm flex justify-center items-center hover:cursor-pointer">
                  <Linkedin />
                </div>
            </div>
        </div>
    </div>
  )
}
