import axios from 'axios';

const externalApiBase = 'http://localhost:3000/api';
// const KEY = 'OPLxaE9SBQ0kaVZ7PTaQD9FKIzrV4XmIPIF8QOlnU5It';

const apiClient = axios.create({
  baseURL: `${externalApiBase}`,
});

// const injectToken = (config) => {
//   config.headers.authorization = `Token token=${KEY}`;
//   return config;
// };

// apiClient.interceptors.request.use(injectToken);

export default apiClient;
