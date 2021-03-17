// https://tailwindui.com/components/marketing/sections/cta-sections#component-866bae7689f78a3192c7ce764a291a44
import React from 'react'

const ctaSimple = (props) => {
  const { buttons } = props.buttons
  let i = 0
  return (
    <div className="bg-indigo-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">{props.titleLine1}</span>
          <span className="block text-indigo-600">{props.titleLine2}</span>
        </h2>
        {buttons && (
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            {buttons
              ? buttons.map((btn) => {
                  i += 1
                  return (
                    <div
                      className={`mt-3 rounded-md shadow ${
                        i !== 1 ? 'sm:ml-3' : null
                      }`}
                    >
                      <a
                        href={btn.href}
                        className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${
                          btn.buttonStyle === 'dark'
                            ? `text-white bg-indigo-600 hover:bg-indigo-700`
                            : `text-indigo-600 bg-white hover:bg-gray-50`
                        } md:py-4 md:text-lg md:px-10`}
                      >
                        {btn.buttonTxt}
                      </a>
                    </div>
                  )
                })
              : null}
          </div>
        )}
      </div>
    </div>
  )
}

export default ctaSimple
