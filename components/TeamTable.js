import { useState } from "react";
import Modal from "./Modal";

export default function TeamTable({ headers, data, players }) {

  const [isActive, setIsActive] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  let team = players[0].team.toLowerCase();

  function showPlayerData(index) {
    setCurrentPlayer(players[index]);
    setIsActive(true);
  }

  function hidePlayerData() {
    setIsActive(false);
  }

  return (
    <div className="px-3 py-3 sm:px-10 md:px-20 flex justify-center">
      <table className="border-collapse w-full">
        <thead>
          <tr className="border-b-3 border-gray-350 font-light h-9">
            {
              headers.map((header, indexHeader) => {
                return (
                  indexHeader != 1?
                  <th key={indexHeader}
                    className="text-center py-2 text-base font-light">
                    {header}
                  </th>
                  :
                  <th key={indexHeader}
                    className="text-left pl-2 py-2 text-base font-light">
                    {header}
                  </th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((rowData, indexRow) => {
              return (
                <tr key={indexRow}
                  className="border-b border-gray-300 font-normal h-10
                  text-center hover:bg-gray-200">
                  {
                    rowData.map((item, indexData) => {
                      return (
                        indexData != 1 ?
                        <td key={indexData} className="text-center">
                          {item}
                        </td>
                        :
                        <td
                          key={indexData}
                          className="text-left pl-2 cursor-pointer xs:flex xs:items-center"
                          onClick={() => { showPlayerData(indexRow) }}
                        >
                          <img
                            src={`/images/profilePictures/${team}/${rowData[indexData-1]}.jpg`}
                            className="hidden xs:block h-10 w-10 sm:h-12 sm:w-12 rounded-full mr-2"
                          />
                          {item}
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      {
        isActive
        &&
        <Modal active={isActive} closeModal={hidePlayerData} player={currentPlayer} />
      }
    </div>
  )
}
