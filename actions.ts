import axios from "axios";
const key = process.env.NEXT_PUBLIC_ALPHA_API_KEY;

export const searchStock = async (term: string) => {
  console.log("Okay");
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${term}&apikey=${key}`;

  if (term) {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  }
};
