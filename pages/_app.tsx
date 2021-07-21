import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalStyles";
import { ThemeProvider } from "../styles/ThemeProvider";
import { ThemeContextProvider } from "../context/ThemeContext";
import Layout from "../components/layout";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { SearchContextProvider } from "../context/SearchContext";
import { client } from "../ApolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <SearchContextProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <GlobalStyle />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </ThemeContextProvider>
        </SearchContextProvider>
      </ApolloProvider>
    </>
  );
}
export default MyApp;
