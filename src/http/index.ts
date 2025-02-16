import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://www.tabnews.com.br/api/v1'
});