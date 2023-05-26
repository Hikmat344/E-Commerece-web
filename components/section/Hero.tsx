import { ShoppingCart } from "lucide-react"
 
import { Button } from "../ui/button"

export function Hero() {
    return (
        <div className="flex justify-start text-justify flex-col py-8 px-5 max-w-sm">
        <div>
        <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        An Industrial Take on Streetwear
        </h1>
      </div>

      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
       Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
      </div>

      <div className="pt-5">
      <Button>
            <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
        </Button>
      </div>

      </div >
    )
  }
  