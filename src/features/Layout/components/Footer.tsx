import React from "react";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-20 bg-gray-900 xl:p-20 lg:p-20 md:pl-5 md:pr-5 ">
      <div className="justify-between m-auto max-w-7xl xs:text-center sm:text-center xs:space-y-5 sm:space-y-5 sm:w-1/2 xs:w-1/2 xl:flex lg:flex md:flex">
        <ul>
          <li>
            <a href="#" className="text-2xl font-medium text-white font-logo">
              TravelBlog
            </a>
          </li>
          <li className="flex pt-4 space-x-2 xs:justify-center sm:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <text className="text-gray-300">{"0123-456-789"}</text>
          </li>
          <li className="flex pt-2 space-x-2 xs:justify-center sm:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <text className="text-gray-300">{"travel@gmail.com"}</text>
          </li>
          <li className="flex pt-5 space-x-2 xs:justify-center sm:justify-center">
            <svg
              viewBox="0 0 512 512"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 p-2 rounded-full ring-1 ring-gray-50"
            >
              <path
                d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
			c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
			c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
			c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
			c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
			c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
			C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
			C480.224,136.96,497.728,118.496,512,97.248z"
              />
            </svg>
            <svg
              viewBox="0 0 512 512"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 p-1 rounded-full ring-1 ring-gray-50"
            >
              <path d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0" />
              <path d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0" />
              <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0" />
            </svg>
            <svg
              viewBox="0 0 512 512"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 p-2 rounded-full ring-1 ring-gray-50"
            >
              <path d="M288,176v-64c0-17.664,14.336-32,32-32h32V0h-64c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64l32-80H288z" />
            </svg>
            <svg
              viewBox="0 0 512 512"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 "
            >
              <circle fill="#D42428" cx="236.966" cy="236.966" r="236.966" />
              <path
                fill="#CC202D"
                d="M404.518,69.38c92.541,92.549,92.549,242.593,0,335.142c-92.541,92.541-242.593,92.545-335.142,0
	L404.518,69.38z"
              />
              <path
                fill="#BA202E"
                d="M469.168,284.426L351.886,167.148l-138.322,15.749l-83.669,129.532l156.342,156.338
	C378.157,449.322,450.422,376.612,469.168,284.426z"
              />
              <path
                fill="#FFFFFF"
                d="M360.971,191.238c0-19.865-16.093-35.966-35.947-35.966H156.372c-19.85,0-35.94,16.105-35.94,35.966
	v96.444c0,19.865,16.093,35.966,35.94,35.966h168.649c19.858,0,35.947-16.105,35.947-35.966v-96.444H360.971z M216.64,280.146
	v-90.584l68.695,45.294L216.64,280.146z"
              />
            </svg>
          </li>
        </ul>
        <ul>
          <li>
            <text className="text-xl font-bold text-white font-title">
              {"Subscribe To Our Newsletter"}
            </text>
          </li>
          <li className="pt-5 ">
            <text className="text-gray-400 ">
              {"Get The Best Content Delivered Straight To You Inbox! "}
            </text>
          </li>
          <li className="flex mt-10 border ">
            <input
              className="w-full px-3 py-2 text-white placeholder-gray-300 bg-gray-900 shadow appearance-none focus:outline-none"
              placeholder="Your E-mail address"
            />
            <button className="focus:outline-none hover:bg-gray-500">
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white   "
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </button>
          </li>
        </ul>
        <ul className="xs:hidden sm:hidden">
          <li className="text-gray-400 uppercase ">
            <a href="#" className="font-semibold hover:text-white">
              Home
            </a>
          </li>
          <li className="pt-3 text-gray-400 uppercase ">
            <a href="#" className="font-semibold hover:text-white">
              Best Places
            </a>
          </li>
          <li className="pt-3 text-gray-400 uppercase ">
            <a href="#" className="font-semibold hover:text-white">
              Destinations
            </a>
          </li>
          <li className="pt-3 text-gray-400 uppercase ">
            <a href="#" className="font-semibold hover:text-white">
              Travel Tips
            </a>
          </li>
          <li className="pt-3 text-gray-400 uppercase">
            <a href="#" className="font-semibold hover:text-white">
              Travel Resources
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
