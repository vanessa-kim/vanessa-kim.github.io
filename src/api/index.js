
import axios from 'axios';

const CONTENT_TYPE_HEADER = 'Content-Type';
const CONTENT_TYPE = 'application/json;charset=UTF-8';

const client = axios.create({
  headers: {
    [CONTENT_TYPE_HEADER]: CONTENT_TYPE,
  },
});

export default client;