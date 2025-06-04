'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    // Validate reCAPTCHA
    if (!recaptchaValue) {
      toast.error("Please verify that you're not a robot");
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading('Sending your message...');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptcha: recaptchaValue,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Success
      toast.success('Your message has been sent successfully!', {
        id: loadingToast,
      });
      reset(); // Reset form fields
      setRecaptchaValue(null); // Reset reCAPTCHA
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send your message. Please try again.', {
        id: loadingToast,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4 md:px-6 pt-36">
      <Toaster position="top-center" />

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Contact Information Card */}
        <div className="w-full md:w-2/5 bg-[#1e3c63] text-white p-8 md:p-12 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

          <p className="mb-8 text-gray-200">
            Should you have any question or concern, you can reach us by filling
            out the contact form, calling us, coming to our office, finding us
            on other social networks, or you can personal email us at:
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <span className="font-medium">0812-1111-8456</span>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <span className="font-medium">hello@fore.coffee</span>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <address className="not-italic font-medium">
                Gedung Graha Ganesha, Lantai 1 Suite 120 & 130
                <br />
                Jl. Hayam Wuruk No. 28, RT 014/RW 001, Kelurahan Kebon Klapa,
                <br />
                Kecamatan Gambir, Jakarta Pusat, DKI Jakarta
              </address>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="relative h-40 mt-8">
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#2d4d75] opacity-50"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#2d4d75] opacity-30"></div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-3/5">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                className={`w-full px-4 py-3 border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3c63] focus:border-transparent`}
                {...register('name', { required: true })}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  The field is required.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-3 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3c63] focus:border-transparent`}
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.type === 'pattern'
                    ? 'Please enter a valid email address.'
                    : 'The field is required.'}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-600 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3c63] focus:border-transparent"
                {...register('phone')}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-600 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className={`w-full px-4 py-3 border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3c63] focus:border-transparent`}
                {...register('message', { required: true })}
                disabled={isSubmitting}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  The field is required.
                </p>
              )}
            </div>

            <div>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                onChange={setRecaptchaValue}
              />
              {!recaptchaValue && isSubmitting && (
                <p className="text-red-500 text-sm mt-1">
                  Please verify that you are not a robot.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#1e3c63] text-white font-medium rounded-md hover:bg-[#15325a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1e3c63] focus:ring-opacity-50 flex justify-center items-center"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  SENDING...
                </>
              ) : (
                'SEND'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
