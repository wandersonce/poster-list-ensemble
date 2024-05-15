import axios from 'axios';

export async function getPosterInfo(input: string) {
  //LOCAL ENV VARIABLE
  const omdbApiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const url = `https://www.omdbapi.com/?s=${input}&apikey=${omdbApiKey}`;

  try {
    //Fetch data and get the first results
    const response = await axios.get(url);
    let postersArray;

    //Check if the total results is greater than the initial load
    if (parseInt(response.data.totalResults) > 10) {
      //Calculate how many pages it will have
      let totalPages = Math.ceil(response.data.totalResults / 10);
      postersArray = response.data.Search;

      //Add all posters inside an array from all pages
      for (var i = 2; i <= totalPages; i++) {
        let urlPages = `https://www.omdbapi.com/?s=${input}&apikey=${omdbApiKey}&page=${i}`;
        let newResponse = await axios.get(urlPages);

        postersArray.push(...newResponse.data.Search);
      }

      //Return the full array with all posts if more than 1 page
      return postersArray;
    }

    const inputData = response.data;
    //Return the array with the posts if it has only one page
    return inputData.Search;
  } catch (error) {
    console.error('Error fetching poster info:', error);
    throw error; // Re-throw the error for handling at the calling point
  }
}
