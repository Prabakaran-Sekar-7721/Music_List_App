import axios from 'axios';
import Config from 'react-native-config';

const getTracks = async () => {
    
  try {
    console.log("API_URL: " + Config.API_URL + " CLIENT_ID: " + Config.CLIENT_ID);
    const response = await axios.get(`${Config.API_URL}/tracks`, {
      params: {
        client_id: Config.CLIENT_ID,
        format: 'json',
        limit: 200,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tracks:', error);
  }
};
export default getTracks;