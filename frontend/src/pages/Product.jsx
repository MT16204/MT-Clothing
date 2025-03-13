import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from '../context/ShopContext'
import RelatedProducts from '../components/RelatedProducts'
import { assets } from '../assets/assets'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart}  = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
      products.map((item) => {
          if (item._id === productId) {
              setProductData(item);
              setImage(item.image[0]);
              return null;
          }
      })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])


  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'> 
        {/* Product Data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        

          {/* Product Image */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
              <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                  {
                      productData.image.map((item, index) => (
                        <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
                      ))
                  }
              </div>
              <div className='w-full sm:w-[80%]'>
                  <img src={image} className='w-full h-auto'/>
              </div>
          </div>

          {/* Product Info */}
          <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              {/* <div className=' flex items-center gap-1 mt-2'>
                  <img src={assets.star_icon} className='w-3 5' alt=""/>
                  <img src={assets.star_icon} className='w-3 5' alt=""/>
                  <img src={assets.star_icon} className='w-3 5' alt=""/>
                  <img src={assets.star_icon} className='w-3 5' alt=""/>
                  <img src={assets.star_dull_icon} className='w-3 5' alt=""/>
                  <p className='pl-2'>(43)</p>
              </div> */}
              <p className='mt-5 text-3xl font-medium'>{productData.price}{currency}</p>
              <p className='mt-5 text-[#4f4e4e] md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div>
                  {productData.sizes.map((item, index) => (
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                  ))}
                </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white py-3 px-8 text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm mt-5 text-[#4f4e4e] flex flex-col gap-1'>
                  <p>100% Original product.</p>
                  <p>Cash on delivery is available on this product.</p>
                  <p>Easy return and exchange within 7 days.</p>
              </div>
          </div>

      </div>  

          {/* Desription and Reviews */}
          <div className='mt-20'>
            <div className='flex'>
                <b className='border px-5 py-3 text-sm cursor-pointer'>Description</b>
                {/* <p className='border px-5 py-3 text-sm cursor-pointer'>Reviews(43)</p> */}
            </div>
            <div className='flex flex-col gap-5 border px-6 py-6 text-sm text-[#4f4e4e] tracking-largest'>
              {Object.keys(productData.description_detail).map((key, index) => {
                const detail = productData.description_detail[key];
                
                if (typeof detail === 'object' && detail !== null) {
                  return (
                    <div key={index}>
                      <strong>{key}:</strong>
                      <ul>
                        {Object.entries(detail).map(([size, value], subIndex) => (
                          <li key={subIndex}>{size}: {value}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                return (
                  <div key={index}>
                    <strong>{key}:</strong>
                    <p>{detail}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Related Products */}
          <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

          <div><OurPolicy/></div>
          <div><NewsletterBox/></div>
    </div>
  ) : <div className='opacity-0'></div>


}

export default Product