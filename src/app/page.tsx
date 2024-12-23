import React from 'react'
import MainLayout from '@/components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      {/* Main homepage container with background image */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', // Replace with your online image URL
        }}
      >
        {/* Overlay to darken the background for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content overlaid on top of the background */}
        <div className="relative z-10 text-center text-white px-6 md:px-12 py-24">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Website</h1>
          <p className="text-lg mb-8">We provide quality services to help you succeed.</p>

          {/* Additional Section */}
          <section>
            <h1 className="text-3xl">This is content</h1>
            <p className="text-lg mt-4">Feel free to explore more about our offerings.</p>
          </section>
        </div>
      </div>
    </MainLayout>
  )
}
