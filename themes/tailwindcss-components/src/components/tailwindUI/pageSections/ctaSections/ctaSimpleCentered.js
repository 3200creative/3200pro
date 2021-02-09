import React from 'react'

const CTASimpleCentered = (props) => (
  <div className="bg-indigo-700">
    <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        <span className="block">Boost your productivity.</span>
        <span className="block">Start using Workflow today.</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-indigo-200">
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
        Malesuada adipiscing sagittis vel nulla nec.
      </p>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get started
          </a>
        </div>
        <div className="ml-3 inline-flex">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default CTASimpleCentered
