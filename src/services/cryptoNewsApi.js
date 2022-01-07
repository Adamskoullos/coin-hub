import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-messari-api-host": process.env.REACT_APP_MESSARI_API_HOST,
  "x-messari-api-key": process.env.REACT_APP_MESSARI_API_KEY,
};

const baseUrl = process.env.REACT_APP_MESSARI_API_URL;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//   reducerPath: "cryptoNewsApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: ({ newsCategory, count }) =>
//         createRequest(
//           `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
//         ),
//     }),
//   }),
// });
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ page }) => createRequest(`/news?page=${page}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
