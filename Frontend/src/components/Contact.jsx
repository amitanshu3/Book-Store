import React from 'react'
import { useForm } from 'react-hook-form'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // handle form submission
  }

  return (

    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900 dark:text-white">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md dark:bg-slate-900 dark:text-white dark:shadow-2xl dark:border border-white">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:bg-slate-900 dark:text-white">
            We'd love to hear from you!
          </p>
        </div>
        <form className="mt-8 space-y-6  " onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-2">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm    dark:bg-slate-900 dark:text-white"
                placeholder="Your Name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
            </div>
            <div className="py-2">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  dark:bg-slate-900 dark:text-white"
                placeholder="Email address"
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>
            <div className="py-2">
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm    dark:bg-slate-900 dark:text-white"
                placeholder="Subject"
                {...register('subject', { required: 'Subject is required' })}
              />
              {errors.subject && <span className="text-sm text-red-500">{errors.subject.message}</span>}
            </div>
            <div className="py-2">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm    dark:bg-slate-900 dark:text-white"
                placeholder="Your Message"
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <Footer />
    </>
    
  )
}

export default Contact
