import React from 'react'

const Centered2x2Grid = (props) => (
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          {props.preTitle}
        </p>
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {props.title}
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {props.subTitle}
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {props.gridItem
            ? props.gridItem.map((item) => (
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {item.title}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {item.subTitle}
                    </dd>
                  </div>
                </div>
              ))
            : null}
        </dl>
      </div>
    </div>
  </div>
)

export default Centered2x2Grid
