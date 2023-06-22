import { AppProps } from "next/app";
import "../scss/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
