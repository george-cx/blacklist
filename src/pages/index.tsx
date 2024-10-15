import React, { useState } from 'react'
import Loading from 'public/svgs/loading.svg'
import { sendPhones } from 'src/services'
import Table from 'src/components/Table'
import { BlackListData } from 'src/interfaces/blackList.interface'
import {
  BLACKLIST_BLACK,
  BLACKLIST_BLUE,
  BLACKLIST_CYAN,
} from 'src/styles/vars'
import { generateRandomPhoneNumber } from 'src/utils/generateRandomPhoneNumber'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [data, setData] = useState<BlackListData>({
    response: {},
    timeTaken: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  async function collectGeneratedNums() {
    const randomNumber = Math.floor(Math.random() * (1200 - 900 + 1)) + 900

    const finalArray: string[] = []

    while (finalArray.length < randomNumber) {
      const generatedNum = generateRandomPhoneNumber()
      if (!finalArray.includes(generatedNum)) {
        finalArray.push(generatedNum)
      }
    }

    setIsLoading(true)

    try {
      const { data, timeTaken } = await sendPhones(finalArray)

      setData({ response: data, timeTaken })

      setData({ response: data, timeTaken: timeTaken })

      return { data, timeTaken }
    } catch (error) {
      console.error('Error fetching phone numbers:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button onClick={() => collectGeneratedNums()}>
        Request Phone Numbers
      </button>

      {isLoading ? <Loading className="loading-circle-svg" /> : null}

      {data?.response?.status ? <Table data={data} /> : null}

      <style jsx global>{`
        .loading-circle-svg {
          stroke: ${BLACKLIST_BLUE};
          width: 3rem;
          height: 3rem;
          display: block;
          margin: 0 auto 2rem;
        }
      `}</style>

      <style jsx>{`
        button {
          color: ${BLACKLIST_BLACK};
          text-shadow: 0px 0px 2.3rem ${BLACKLIST_CYAN};
          font-family: 'Archivo Narrow';
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 600;
          line-height: 108%;
          letter-spacing: 0.032rem;
          text-transform: uppercase;
          margin: 2rem auto !important;
          display: block !important;
        }
      `}</style>
    </>
  )
}

export default Home
