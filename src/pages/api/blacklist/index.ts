import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' })
  }
  const { phones } = req.body

  try {
    const startTime = Date.now()

    const response = await axios.post(
      `https://api.blacklistalliance.net/bulklookup?key=${process.env.BLACKLIST_API_KEY}`,
      { phones: phones },
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )

    const endTime = Date.now()

    const timeTaken = endTime - startTime

    res.status(200).json({ data: response.data, timeTaken: `${timeTaken}ms` })
  } catch (error: any) {
    console.error('Error fetching data:', error)
    res
      .status(500)
      .json({ message: 'Something went wrong', error: error.message })
  }
}
