import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import "../styles/globals.css";

import es from "../locales/es/home.json";
import en from "../locales/en/home.json";

const messages = {
  es,
  en,
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={locale} />
    </IntlProvider>
  );
}

export default MyApp;
