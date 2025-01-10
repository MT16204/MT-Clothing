import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import Button from './Button'



const BestSeller = () => {
    const {products}  = useContext(ShopContext);
    const [bestseller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item)=> (item.bestseller===true));
        setBestSeller(bestProduct.slice(0, 10));
    },[])

  return (
    <div className='my-10'>
        <div className='text-center py-9 text-2xl'> 
            <Title text1 = {'BEST SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 italic'>
                Explore our best seller products
            </p>
        </div>

        {/* {Product} */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
            {
                bestseller.map((item,index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>

        <div className='mt-8 flex justify-center items-center'><Button/></div>

    </div>
  )
}

export default BestSeller