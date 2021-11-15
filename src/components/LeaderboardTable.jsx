import { useRouter } from "next/router";

export default function LeaderboardTable({ headers, headers2 = null, data, data2 = null }) {
  const router = useRouter();
  return (
    <div className="flex px-3 sm:px-0 w-full">
      <div className="w-full sm:w-80 lg:w-full">
        <table className="border-collapse w-full">
          <thead>
            <tr className="border-b-3 border-gray-350 bg-white h-9">
              {
                headers.map((header, indexHeader) => {
                  return (
                    indexHeader == 1?
                    <th key={indexHeader}
                      className="text-left pl-2 text-sm font-medium">
                      {header}
                    </th>
                    :
                    indexHeader == headers.length - 1 ?
                    <th key={indexHeader}
                      className="text-center text-sm font-medium hidden">
                      {header}
                    </th>
                    :
                    indexHeader%2 == 0 && indexHeader != 0?
                    <th key={indexHeader}
                      className="text-center text-sm font-medium min-w-5 sm:min-w-8
                      bg-gray-150">
                      {header}
                    </th>
                    :
                    <th key={indexHeader}
                      className="text-center text-sm font-medium min-w-5 sm:min-w-8">
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
                    className="border-b border-gray-300 font-normal h-12
                    text-center bg-white">
                    {
                      rowData.map((item, indexData) => {
                        let keyData = indexData + indexRow;
                        return (
                          indexData == 1 ?
                          <td
                            key={keyData}
                            className="text-left pl-2 cursor-pointer flex
                            justify-start items-center h-11"
                            onClick={() => {
                              router.push('/clubs/' + item.toLowerCase())
                            }}
                          >
                            <img
                              src={`/images/${item}.svg`}
                              className="h-9 w-9 xs:mr-2 sm:h-12 sm:w-12 hidden xs:block"
                            />
                            <span className="">{item}</span>
                          </td>
                          :
                          <td key={keyData} className="text-center">
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
      </div>
      <div className="w-full overflow-x-auto scrollbar-hide">
        <table className="border-collapse">
          <thead>
            <tr className="border-b-3 border-gray-350 bg-white h-9">
              {
                headers2.map((header, indexHeader) => {
                  return (
                    indexHeader == 1?
                    <th key={indexHeader}
                      className="text-center min-w-10 sm:min-w-12 md:w-14 text-sm font-medium">
                      {header}
                    </th>
                    :
                    indexHeader == headers2.length - 1 ?
                    <th key={indexHeader}
                      className="text-center text-sm font-medium hidden">
                      {header}
                    </th>
                    :
                    indexHeader%2 == 0 ?
                    <th key={indexHeader}
                      className="text-center text-sm font-medium min-w-10 sm:min-w-12 md:w-14
                      bg-gray-150">
                      {header}
                    </th>
                    :
                    <th key={indexHeader}
                      className="text-center text-sm font-medium min-w-10 sm:min-w-12 md:w-14">
                      {header}
                    </th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              data2.map((rowData, indexRow) => {
                return (
                  <tr key={indexRow}
                    className="border-b border-gray-300 font-normal h-12
                    text-center bg-white">
                    {
                      rowData.map((item, indexData) => {
                        let keyData = indexData + indexRow;
                        return (
                          indexData == rowData.length - 1 ?
                          <td key={keyData} className="hidden">
                            {item}
                          </td>
                          :
                          indexData%2 == 0 ?
                          <td key={keyData} className="text-center bg-gray-150">
                            {item}
                          </td>
                          :
                          <td key={keyData} className="text-center">
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
      </div>
    </div>
  )
}
