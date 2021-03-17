import React from 'react'

const TailwindStats = (props) => (
  <div className="bg-gray-50 pt-12 sm:pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {props.title}
        </h2>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">{props.subTitle}</p>
      </div>
    </div>
    <div className="mt-10 pb-12 bg-white sm:pb-16">
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-gray-50" />
        <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <dl
              className={`rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-${
                props.stats.length < 4 ? props.stats.length : '4'
              }`}
            >
              {props.stats
                ? props.stats.map((stat) => (
                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-1 text-5xl font-extrabold text-indigo-600">
                        {stat.title}
                      </dt>
                      <dd className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        {stat.subTitle}
                      </dd>
                    </div>
                  ))
                : null}
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TailwindStats