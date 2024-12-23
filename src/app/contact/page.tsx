'use client'

import React, { useState } from 'react'
import Header from '@/components/partials/Header' // Assuming Header is in the 'partials' folder
import Footer from '@/components/partials/Footer' // Assuming Footer is in the 'partials' folder
import MainLayout from '@/components/layouts/MainLayout'; // If you want to use this as a layout component (optional)

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<string>('')  // For showing success or error message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Set status to "submitting" while awaiting response
    setStatus('Submitting...')

    try {
      const response = await fetch('/api/submit_Contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('Your message has been sent successfully!')
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } else {
        setStatus('Error sending message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('Error sending message. Please try again.')
    }
  }

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Contact Form */}
      <main className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-blue-600 mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Status Message */}
          {status && <p className="mt-4 text-lg text-center text-gray-700">{status}</p>}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact
