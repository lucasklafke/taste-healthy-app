// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: any
) {
  if(req.method === 'POST') {
    // eslint-disable-next-line no-undef
    const url = `${String(process.env.API_URL)}/auth`
    const {data} = await axios.get(url)
    res.status(200).send(data)
  }
}
