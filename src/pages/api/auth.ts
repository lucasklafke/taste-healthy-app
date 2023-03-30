// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: any
) {
  if(req.method === 'POST') {
    // eslint-disable-next-line no-undef
    const url = `${String(process.env.API_URL)}/auth/login`
    console.log(url)
    const body: {email:string, password:string} = req.body

    const promise = axios.post(url, body)
    promise.then(response => {
      res.status(200).send(response.data)
    })
    promise.catch(response => {
      res.status(response.response.status).send(response.response.data.message)
    })



  }
}
