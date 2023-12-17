'use client'

const pricingPlans = [
  {
    id: "2",
    // id: "7", test id
    duration: "1 Month",
    pricing: "Free",
    features: ["1 Video/day", "Upto 1 Languages"],
  },
  {
    id: "5",
    duration: "3 Month",
    pricing: "$39",
    features: ["10 Video/day", "Upto 5 Languages"],
  },
  // {
  //   id: "10",
  //   type: "most_popular",
  //   duration: "6 Month",
  //   pricing: "₹399",
  //   features: [
  //     "Daily Shlokas",
  //     "Upto 10 Languages",
  //     "Customer Support",
  //   ],
  // },
  {
    id: "9",
    type: "best_value",
    duration: "12 Month",
    pricing: "$99",
    features: [
      "12 Videos/day",
      "Upto 10 Languages",
      "Customer Support",
    ],
  },
];

function Pricing() {

  return (
    <section className="relative overflow-hidden pb-12 lg:pb-24 xl:pb-32 sm:pt-16">
      <div className="pricing-left-overlay-shadow-effect"></div>
      <div className="pricing-right-overlay-shadow-effect"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mx-auto mt-6 text-center text-4xl font-semibold leading-8 text-gray-900">
          Choose the plan that suits you the best for you
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-normal text-gray-700">Flexible based on your needs. Start with a 3-day free trial.</p>

        <div className="isolate mx-auto mt-16 grid grid-cols-3 gap-y-8 gap-x-8 sm:mt-20">
          {pricingPlans.map((plan) => {
            if (plan.type === "most_popular") {
              return (
                <div
                  key={plan.id}
                  className="flex flex-col justify-between rounded-md bg-blue-600 text-white p-8 ring-1 ring-gray-200 xl:p-10 lg:z-10 shadow-2xl shadow-[#0a59a321]  relative"
                >
                  <div>
                    <div className="bg-[#004CA5] absolute top-0 p-1 text-sm font-semibold w-full left-0 text-center text-gray-300 rounded-t-md">
                      MOST POPULAR
                    </div>

                    <div className="flex items-center justify-between gap-x-4">
                      <h3 className="text-lg font-semibold leading-8 text-center w-full">
                        6 Month
                      </h3>
                    </div>
                    <p className="mt-2 mb-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-center w-full">
                        ₹399
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600"></span>
                    </p>
                    <hr />

                    <ul className="mt-8 space-y-3 text-sm leading-6 text-white">
                      <li className="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_55_173)">
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_55_173">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Daily Shlokas
                      </li>
                      <li className="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_55_173)">
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_55_173">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Upto 10 Languages
                      </li>
                      <li className="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_55_173)">
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_55_173">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Customer Support
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      handleSubscription(plan);
                    }}
                    type="button"
                    className="mt-8 block rounded-xl px-3 py-2 text-center text-sm font-semibold leading-6 bg-white text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Subscribe
                  </button>
                </div>
              );
            }

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-md bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:mt-8 shadow-2xl shadow-[#0a59a321] relative`}
              >
                <div>
                  {plan.type === "best_value" && (
                    <div className="bg-[#0E947C] absolute top-0 p-1 text-sm font-semibold w-full left-0 text-center text-white rounded-t-md">
                      BEST VALUE
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900 text-center w-full">
                      {plan.duration}
                    </h3>
                  </div>
                  <p className="mt-2 mb-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-blue-600 text-center w-full">
                      {plan.pricing}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600"></span>
                  </p>
                  <hr />
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-black">
                    {plan.features.map((feature, index) => (
                      <li key={plan.id + feature} className="flex gap-x-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Check circle" clipPath="url(#clip0_55_91)">
                            <path
                              id="Vector"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                              fill="#0268DF"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_55_91">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => {
                    handleSubscription(plan);
                  }}
                  type="button"
                  className="mt-8 block rounded-xl px-3 py-2 text-center text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-200 transition-all duration-150 hover:bg-blue-50 hover:ring-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Subscribe
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex items-center justify-center sm:mt-12">
          <p className="text-base font-medium leading-6 text-gray-600 px-4 py-1 pricing-message-shadow rounded-lg md:rounded-full">
            *The pricing is inclusive of taxes and additional local tax may be collected.
          </p>
        </div>
      </div>
    </section>
  );
}

export default (Pricing);
