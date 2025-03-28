import React from 'react'

const data = [
  {
    rover: 'Curiosity',
    landing: 'August 6, 2012',
    solRange: '0 to Present (still active)',
  },
  {
    rover: 'Spirit',
    landing: 'January 4, 2004',
    solRange: '0 to 2208 (last contact in 2010)',
  },
  {
    rover: 'Opportunity',
    landing: 'January 25, 2004',
    solRange: '0 to 5111 (last contact in 2018)',
  },
]

const RoverRanges = () => {
  return (
    <div className="w-full max-w-2xl mx-auto font-sans p-4">
      <h2 className="text-center text-xl font-bold mb-4 text-white">
        Mars Rover Mission Timelines
      </h2>
      <div className="overflow-x-auto rounded-md">
        <table className="w-full text-left text-black">
          <thead>
            <tr className="bg-red-300">
              <th className="p-2">Rover</th>
              <th className="p-2">Landing Date (Earth)</th>
              <th className="p-2">Sol Range</th>
            </tr>
          </thead>
          <tbody>
            {data.map((rover) => (
              <tr key={rover.rover} className="odd:bg-red-100 even:bg-red-100">
                <td className="p-2 font-semibold">{rover.rover}</td>
                <td className="p-2">{rover.landing}</td>
                <td className="p-2">{rover.solRange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RoverRanges
