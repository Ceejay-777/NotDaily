import axios from "axios";
const alpha_key = process.env.ALPHA_API_KEY;
const finnhub_token = process.env.FINNHUB_API_TOKEN;
const max_results = 6;

export const searchStock = async (query: string | undefined) => {
  // const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${key}`;

  
  if (!query) {
    return 
  }

  const url = `https://finnhub.io/api/v1/search?q=${encodeURIComponent(
    query
  )}&token=${finnhub_token}`;

  if (query) {
    try {
      const response = await axios.get(url);

      const data = response.data;
      // console.log(data);
      const choice =
        data.count > max_results
          ? data.result.slice(0, max_results)
          : data.result;
      // console.log(choice  + "Okay")
      return { choice, status: "success" };
    } catch (error: any) {
      console.log("Error searching stocks", error.message);
      return {
        message:
          "Could not search at this time. Please check your internet connection",
        status: "error",
      };
    }
  }
};
