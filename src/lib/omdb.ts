import axios from 'axios';

export async function getPosterInfo(input: string) {
  //LOCAL ENV VARIABLE
  const omdbApiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const url = `http://www.omdbapi.com/?s=${input}&apikey=${omdbApiKey}`;

  try {
    //Fetch data
    const response = await axios.get(url);

    //Save response in a variable
    const inputData = response.data;

    return inputData.Search;
  } catch (error) {
    console.error('Error fetching poster info:', error);
    throw error; // Re-throw the error for handling at the calling point
  }
}
