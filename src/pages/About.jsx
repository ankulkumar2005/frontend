import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to MedixCare, your reliable partner in managing healthcare needs with ease and efficiency. At MedixCare, we recognize the everyday challenges people face when it comes to booking doctor appointments, accessing medical support, and organizing health records.</p>
          <p>MedixCare is dedicated to driving innovation in healthcare technology. Our team constantly works to enhance the platform by integrating modern solutions that improve the user experience and deliver exceptional care services. Whether you're scheduling a consultation for the first time or managing ongoing treatment, MedixCare is with you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At MedixCare, our vision is to build a smooth, patient-centered healthcare journey for everyone. We strive to close the gap between patients and healthcare professionals—making quality care more accessible, more timely, and more personalized than ever before.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>MedixCare offers a fast and user-friendly appointment booking system designed to fit seamlessly into your daily routine—saving you time and effort.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Get instant access to a trusted network of verified healthcare professionals near you, all from the comfort of your home.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Receive smart, personalized health reminders and doctor recommendations based on your medical history and needs—helping you stay informed and in control.</p>
        </div>
      </div>

    </div>
  )
}

export default About
