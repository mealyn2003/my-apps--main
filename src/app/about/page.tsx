'use client'

import React from 'react'
import Header from '@/components/partials/Header'  // Assuming Header is in the 'partials' folder
import Footer from '@/components/partials/Footer' // Assuming Footer is in the 'partials' folder

const About: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* About Content */}
      <main className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-blue-600 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to My Website! We are a team of passionate individuals dedicated to providing
            the best service to our customers. Our mission is to create impactful experiences and
            bring the highest value to the community we serve.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our team is made up of skilled professionals in the fields of technology, design, and
            marketing, working together to achieve common goals. We're constantly improving our
            processes and adapting to new challenges to stay ahead.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default About
