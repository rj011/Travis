import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';
const options = {
  
  
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
    
  },
  headers: {
    'X-RapidAPI-Key': '2c053e6ad1msh3f3c7e435ecf6c7p151f4cjsndcb54bbf6838',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};




export const getPlacesData = async () => {
    try{
        const {data: { data }} = await axios.get(URL, options);
        return data;
    } catch (error){
        console.log(error);
    }
}