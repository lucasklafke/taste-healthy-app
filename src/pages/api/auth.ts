// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: any
) {
  if(req.method === 'POST') {
    const body = req.body;
    const url = `${String(process.env.API_URL)}/auth`
    const {data} = await axios.get(url)
    res.status(200).send(data)
  }
}
