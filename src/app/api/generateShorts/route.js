// pages/api/generateShorts.js

import axios from "axios";

export async function POST(req) {
    try {
      const {url} = await req.json()

      const {data, status} = await axios.post('http://127.0.0.1:5000/generate-shorts', { url });

      console.log(data)

      return Response.json({status: 200, "response": data });
    } catch (error) {
      console.error('Error processing request:', error.message);
      return Response.json({ status: 500, error: 'Internal Server Error' });
    }
  }
  