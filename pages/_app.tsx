import type { AppProps } from "next/app";
import { pretendard } from "../styles/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={pretendard.className}>
      <Component {...pageProps} />
    </div>
  );
}
