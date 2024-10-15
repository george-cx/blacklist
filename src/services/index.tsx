import axios from 'axios'

export const sendPhones = async (numbers: string[]) => {
  try {
    const response = await axios.post('/api/blacklist', {
      phones: numbers,
    })
    return response.data
  } catch (error) {
    console.error('Error sending phones:', error)
    throw new Error('Failed to send phones')
  }
}
