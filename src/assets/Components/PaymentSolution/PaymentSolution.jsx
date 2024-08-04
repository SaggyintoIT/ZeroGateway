import React from 'react';

const PaymentSolution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-6">
            Payments Solutions
          </h2>
          <p className="text-lg font-normal text-gray-500 mb-5">
            We provide all the advantages that can simplify all your financial transactions without any further requirements.
          </p>
        </div>
        <div className="wrapperpayment w-full flex justify-center ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-4/5 lg:grid-cols-3">
          <div className="group relative bg-[#dcf3eb] rounded-2xl p-6 transition-all duration-500 hover:bg-green-600">
            <div className="rounded-full border-2 border-green-700 flex justify-center items-center mb-5 w-14 h-14">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z" stroke="green" strokeWidth="2"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Payment Links</h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances.
            </p>
          </div>
          <div className="group relative bg-[#fbebeb] rounded-2xl p-6 transition-all duration-500 hover:bg-pink-300">
            <div className=" rounded-full border-2 border-pink-400 flex justify-center items-center mb-5 w-14 h-14">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z" stroke="pink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">QR Codes</h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              We have the most up-to-date security to support the security of all our customers in carrying out all transactions.
            </p>
          </div>
          <div className="group relative bg-[#fbf3d3] rounded-2xl p-6 transition-all duration-500 hover:bg-yellow-400">
            <div className="border-2 border-yellow-500 rounded-full flex justify-center items-center mb-5 w-14 h-14">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Instant Settlement</h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              Provide Customer Service For Those Of You Who Have Problems 24 Hours A Week.
            </p>
          </div>
          <div className="group relative bg-[#f3e3fb] rounded-2xl p-6 transition-all duration-500 hover:bg-purple-400">
            <div className="rounded-full border-2 border-purple-700 flex justify-center items-center mb-5 w-14 h-14">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8333 15.5556H9.44444C8.21667 15.5556 7.5 14.8389 7.5 13.6111V10.8333C7.5 9.60556 8.21667 8.88889 9.44444 8.88889H10.8333C12.0611 8.88889 12.7778 9.60556 12.7778 10.8333V13.6111C12.7778 14.8389 12.0611 15.5556 10.8333 15.5556ZM19.4444 15.5556H18.0556C16.8278 15.5556 16.1111 14.8389 16.1111 13.6111V10.8333C16.1111 9.60556 16.8278 8.88889 18.0556 8.88889H19.4444C20.6722 8.88889 21.3889 9.60556 21.3889 10.8333V13.6111C21.3889 14.8389 20.6722 15.5556 19.4444 15.5556Z" stroke="purple" strokeWidth="2"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Smart Route</h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              We offer various flexible plans to suit your financial needs and preferences.
            </p>
          </div>
          <div className="group relative bg-[#fbfbdc] rounded-2xl p-6 transition-all duration-500 hover:bg-yellow-200">
            <div className="border-2 rounded-full border-yellow-500 flex justify-center items-center mb-5 w-14 h-14">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3.75C8.89644 3.75 4.5 8.14644 4.5 14.25C4.5 20.3536 8.89644 24.75 15 24.75C21.1036 24.75 25.5 20.3536 25.5 14.25C25.5 8.14644 21.1036 3.75 15 3.75ZM15 10.5C16.933 10.5 18.5 12.067 18.5 14C18.5 15.933 16.933 17.5 15 17.5C13.067 17.5 11.5 15.933 11.5 14C11.5 12.067 13.067 10.5 15 10.5Z" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Checkout Ads</h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              Our solutions are designed to work seamlessly across different regions and currencies.
            </p>
          </div>
          <div className="group relative bg-[#f3dbdb] rounded-2xl p-6 transition-all duration-500 hover:bg-orange-300">
            <div className="rounded-full border-2 border-orange-400 flex justify-center items-center mb-5 w-14 h-14">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z" stroke="orange" strokeWidth="2"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">API Access</h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              Our team is always available to assist you with any issues or questions you may have.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSolution;
