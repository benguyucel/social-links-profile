import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
       <div
        role="main"
        class="container flex items-center mx-auto justify-center min-h-screen"
      >
        <div
          class="desktop:max-w-[384px] mobile:max-w-[343px] w-full bg-custom-grey-800 p-10 rounded-lg shadow-lg"
        >
          <img
            src="/assets/images/avatar-jessica.jpeg"
            alt="Jessica"
            class="w-24 h-24 rounded-full mx-auto mb-6"
          />
          <h1 class="text-2xl font-bold text-center mb-1 text-custom-white">
            Jessica Randall
          </h1>
          <address class="text-center text-custom-grey-400 mb-6 not-italic">
            <span class="text-sm font-bold text-custom-green"
              >London, United Kingdom</span
            >
          </address>
          <p class="text-center text-sm text-custom-white/70 mb-6">
            "Front-end developer and avid reader"
          </p>
          <div class="flex flex-col gap-y-3.5 justify-center items-center w-full">
            <a href="/" class=" text-sm rounded-md w-full py-3.5  hover:bg-custom-green hover:text-custom-grey-700 transition-colors duration-300 bg-custom-grey-700 text-custom-white text-center font-semibold">GitHub</a>
            <a href="/" class=" text-sm rounded-md w-full py-3.5  hover:bg-custom-green hover:text-custom-grey-700 transition-colors duration-300 bg-custom-grey-700 text-custom-white text-center font-semibold">Frontend Mentor</a>
            <a href="/" class=" text-sm rounded-md w-full py-3.5  hover:bg-custom-green hover:text-custom-grey-700 transition-colors duration-300 bg-custom-grey-700 text-custom-white text-center font-semibold">LinkedIn</a>
            <a href="/" class=" text-sm rounded-md w-full py-3.5  hover:bg-custom-green hover:text-custom-grey-700 transition-colors duration-300 bg-custom-grey-700 text-custom-white text-center font-semibold">Twitter</a>
            <a href="/" class=" text-sm rounded-md w-full py-3.5  hover:bg-custom-green hover:text-custom-grey-700 transition-colors duration-300 bg-custom-grey-700 text-custom-white text-center font-semibold">Instagram</a>
          </div>
        </div>
      </div>
`;

setupCounter(document.querySelector("#counter"));
