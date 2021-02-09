import React from 'react'

const HeroSplitContentWithImage = (props) => {
  const { buttons } = props.buttons
  let i = 0 // counter for all button margins except first button.
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">{props.title1}</span>
              <span className="block text-indigo-600">{props.title2}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {props.subTitle}
            </p>
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
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixqx=DGp9TbiLnL&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </main>
    </div>
  )
}

export default HeroSplitContentWithImage
