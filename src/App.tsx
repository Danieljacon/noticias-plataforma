import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { BrowserRouter as Routes } from "react-router-dom";
import Home from "./pages/Home";
import Router from "./Router";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Router />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
