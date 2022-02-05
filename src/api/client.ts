import {ApolloClient, InMemoryCache} from '@apollo/client';
import axios from 'axios';

const BASE_API_URL = 'https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/auth';
const access_token = sessionStorage.getItem('access_token');

const GET_HEADER = () => {
    return { 'Content-Type': 'application/json' };
};

// get data from api and return response. It takes urlParam which can be empty
export const GET_ACCESS_TOKEN = async (code: string) => {
    try {
        const response = await axios({
          method: 'post',
          url: `${BASE_API_URL}`,
          headers: GET_HEADER(),
          data: code
        });

        sessionStorage.setItem('access_token', response.data.data.access_token);

        return response.data.message;
    } catch (error: any) {
        return error.response;
    }
};



const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${access_token}`
  },

  cache: new InMemoryCache()
});

export default client;