// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // eslint-disable-next-line no-undef
  const url = `${String(process.env.API_URL)}/user`

  if(req.method === 'GET') {
    const {data} = await axios.get(url)
    res.status(200).send(data)
  }
  if(req.method === 'POST') {
    const body = req.body
    const promise = axios.post(url, body)
    promise.then(response => {
      res.status(200).send(response.data)
    })
    promise.catch(response => {
      res.status(response.response.status).send(response.response.data.message)
    })
  }
}
