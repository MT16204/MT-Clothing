import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='prata-regular font-medium flex items-center justify-center text-3xl mb-3'>
            <p>Cart Total</p>
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{getCartAmount()}{currency}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{delivery_fee}{currency}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Total</p>
                <b>{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee} {currency}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal