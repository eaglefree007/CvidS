import axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '9cdb55e9bemshb2dbfe9551fb04fp13753ajsn1347656e0874',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (end_url) => {
  const {data} = await axios.request(`${BASE_URL}/${end_url}`, options)
  return data; 
}