import React, { FC } from 'react'
import { BlackListData } from 'src/interfaces/blackList.interface'

interface Props {
  data?: BlackListData
}

const Table: FC<Props> = ({ data }) => {
  return (
    <>
      <table border={1} style={{ width: '100%' }}>
        <thead>
          <tr style={{ display: 'flex' }}>
            <th>Status</th>

            <th>Numbers</th>

            <th>Count</th>

            <th>timeTaken</th>

            <th>Phones</th>

            <th>Suppression</th>

            <th>Wireless</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ display: 'flex' }}>
            <td className="small-td">{data?.response?.status}</td>

            <td className="small-td">{data?.response?.numbers}</td>

            <td className="small-td">{data?.response?.count}</td>

            <td className="small-td">{data?.timeTaken}</td>

            <td>
              <ul>
                {data?.response?.phones?.map((phone) => (
                  <li key={phone}>{phone},</li>
                ))}
              </ul>
            </td>

            <td>
              <ul>
                {data?.response?.supression?.map((suppressed) => (
                  <li key={suppressed}>{suppressed},</li>
                ))}
              </ul>
            </td>

            <td>
              <ul>
                {data?.response?.wireless?.map((wirelessPhone) => (
                  <li key={wirelessPhone}>{wirelessPhone},</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        td {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 1rem;
          width: 23.7rem;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          width: 25rem;
        }

        th {
          width: 23.7rem;
        }

        .small-td {
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default Table
