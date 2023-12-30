

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}