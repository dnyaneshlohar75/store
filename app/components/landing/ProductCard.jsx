import Image from "next/image";
import Button from "../Button";
import { Eye, Heart } from "lucide-react";
import { useRouter } from 'next/navigation'

const ProductCard = ({product}) => {
  const route = useRouter()
  return (
    <div className = 'border p-5 space-y-3'>
        <div className="w-full h-52 flex items-center justify-center">
            <Image src = {product.image} width={125} height={125} objectFit="cover" alt = {product.title} />
        </div>
        <div className="space-y-3">
            <div className="space-y-3">
                <h1 className="text-xs truncate font-semibold sm:text-lg">{product.title}</h1>
                <p className="text-xs sm:text-sm line-clamp-3 text-gray-700">{product.description}</p>
            </div>
            <div>
                <p className="text-xs font-medium sm:text-xl">
                    ${product.price.toLocaleString({style: 'currency', currency: 'INR'})}
                </p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <Button text={'Add to cart'} className = 'flex-1'/>
            <button onClick = {() => route.push(`/products/${product.id}`)} className="rounded-md text-gray-900 px-3 py-2 bg-gray-50 font-medium">
                <Eye />
            </button>
        </div>
    </div>
  )
}

export default ProductCard;