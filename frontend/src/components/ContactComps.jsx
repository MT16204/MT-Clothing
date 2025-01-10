import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Button from '../components/Button'

const ContactComps = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'CONTACT US'} />
      </div>

      <div className='my-10 flex flex-col justify-start md:flex-row gap-10 mb-28 px-4'>
        <img className='w-full md:max-w-[480px] object-cover' src={assets.contact_img} alt='Contact Us'/>

        {/* Contact Information */}
        <div className='flex flex-col justify-center items-start gap-6 my-8'>
          <p className='text-xl font-semibold'>Our Store</p>
          <p className='text-gray-600'>
            Address: 123 Main Street, Downtown City, CA 90210
          </p>
          <p className='text-gray-600'>Phone: +123.456.789</p>
          <p className='text-gray-600'>Email: demo@store.com</p>

          <p className='text-gray-600'>
            Store Hours: <br />
            Monday - Friday: 9:00 AM - 8:00 PM <br />
            Saturday: 10:00 AM - 6:00 PM <br />
            Sunday: Closed
          </p>
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default ContactComps;
