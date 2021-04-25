import { useRouter } from "next/router";

export default function LeaderboardTable({ headers, data }) {
  const router = useRouter();
  return (
    <div className="w-full">
      <table className="border-collapse w-full">
        <thead>
          <tr className="border-b-3 border-gray-350 font-light h-9">
            {
              headers.map((header, indexHeader) => {
                return (
                  indexHeader == 1?
                  <th key={indexHeader}
                    className="text-left pl-2 text-sm font-light">
                    {header}
                  </th>
                  :
                  indexHeader == headers.length - 1 ?
                  <th key={indexHeader}
                    className="text-center text-sm font-light hidden">
                    {header}
                  </th>
                  :
                  indexHeader%2 == 0 && indexHeader != 0?
                  <th key={indexHeader}
                    className="text-center text-sm font-light min-w-5 sm:min-w-8 bg-gray-150">
                    {header}
                  </th>
                  :
                  <th key={indexHeader}
                    className="text-center text-sm font-light min-w-5 sm:min-w-8">
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
                  text-center">
                  {
                    rowData.map((item, indexData) => {
                      let keyData = indexData + indexRow;
                      return (
                        indexData == 1 ?
                        <td
                          key={keyData}
                          className="text-left pl-2 cursor-pointer flex justify-start xs:items-center"
                          onClick={() => {router.push('/clubs/' + item.toLowerCase())}}
                        >
                          <img
                            src={`/images/${item}.svg`}
                            height="auto"
                            width="auto"
                            className="h-10 w-10 xs:mr-2"
                          />
                          <span className="hidden xs:block">{item}</span>
                        </td>
                        :
                        indexData == rowData.length - 1 ?
                        <td key={keyData} className="hidden">
                          {item}
                        </td>
                        :
                        indexData%2 == 0 && indexData != 0 ?
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
  )
}
