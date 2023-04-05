import axios from "axios";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_ENDPOINT;

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid h-screen font-Poppins text-white place-items-center bg-zinc-dark">
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp;
