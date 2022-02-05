import {ApolloProvider} from '@apollo/client';
import client from './api/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login, Search, Results} from "./pages";

const App = () => {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Login />} />
          <Route  path="/search" element={<Search />} />
          <Route  path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;