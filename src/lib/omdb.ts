import axios from 'axios';

export async function getPosterInfo(input: string) {
  //LOCAL ENV VARIABLE
  const omdbApiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const url = `http://www.omdbapi.com/?t=${input}&apikey=${omdbApiKey}`;

  try {
    //Fetch data
    const response = await axios.get(url);

    //Save response in a variable
    const inputData = response.data;
    const posterInfo = {
      title: inputData.Title,
      posterUrl: inputData.Poster,
      released: inputData.Released,
    };

    //return only what is required to be used
    return posterInfo;
  } catch (error) {
    console.error('Error fetching poster info:', error);
    throw error; // Re-throw the error for handling at the calling point
  }
}
