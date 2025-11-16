import axios from 'axios';
import Config from 'react-native-config';

const getTracks = async () => {
    
  try {
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