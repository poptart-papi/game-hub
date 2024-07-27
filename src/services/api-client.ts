import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fd1c981696d9495aaa31ee1ce061a9c2',
  },
});
