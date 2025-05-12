import axios from "axios";

const BASE_URL = "http://20.244.56.144/evaluation-service";

// This will hold the bearer token after authentication
let accessToken: string = "";

export async function authenticate() {
  const res = await axios.post(`${BASE_URL}/auth`, {
    email: "am.en.u4cse22319@am.students.amrita.edu",         
    name: "G Chandra Deepika",                  
    rollNo: "AM.EN.U4CSE22319",              
    accessCode: "SwuuKE",          
    clientID: "06738b04-d845-484f-9fc8-6f14e6b6bd99",              
    clientSecret: "zwkgZQfbbZSdPYUU",      
  });

  accessToken = res.data.access_token;
  console.log("Authenticated! Token:", accessToken);
}

export async function getStocks() {
  const res = await axios.get(`${BASE_URL}/stocks`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.stocks;
}

export async function getStockPrice(ticker: string, minutes: number) {
  const res = await axios.get(
    `${BASE_URL}/stocks/${ticker}?minutes=${minutes}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res.data;
}
