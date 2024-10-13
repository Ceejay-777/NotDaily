import axios from "axios";
const key = process.env.NEXT_PUBLIC_ALPHA_API_KEY;

export const searchStock = async (query: string) => {
  console.log("Okay");
  // const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${key}`;
  const url = `https://finnhub.io/api/v1/search?q=${query}&token=cqoalv9r01qo8865rbb0cqoalv9r01qo8865rbbg`

  if (query) {
    try {
      const response = await axios(url);
      const data = response.data;
      // console.log(data);
      const choice = data.count > 6 ? data.result.slice(0,6) : data.result
      console.log(choice)
      return choice
    } catch (error: any) {
      console.log(error.message);
      return error.message
    }
  }
};
