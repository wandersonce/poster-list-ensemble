import axios from 'axios';

export async function getPosterInfo(input: string) {
  //LOCAL ENV VARIABLE
  const omdbApiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const url = `https://www.omdbapi.com/?s=${input}&apikey=${omdbApiKey}`;

  try {
    //Fetch data
    const response = await axios.get(url);
    let postersArray;

    //Save response in a variable
    if (parseInt(response.data.totalResults) > 10) {
      let totalPages = Math.ceil(response.data.totalResults / 10);
      postersArray = response.data.Search;

      for (var i = 2; i <= totalPages; i++) {
        let urlPages = `https://www.omdbapi.com/?s=${input}&apikey=${omdbApiKey}&page=${i}`;
        let newResponse = await axios.get(urlPages);

        postersArray.push(...newResponse.data.Search);
      }

      return postersArray;
    }

    const inputData = response.data;
    return inputData.Search;
  } catch (error) {
    console.error('Error fetching poster info:', error);
    throw error; // Re-throw the error for handling at the calling point
  }
}
