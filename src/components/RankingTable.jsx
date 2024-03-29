import { useRouter } from "next/router";

export default function RankingTable({ headers, data }) {
  const router = useRouter();

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr className="border-b-3 border-gray-350 font-light h-9 bg-white">
          {
            headers.map((header, indexHeader) => {
              return (
                indexHeader != 1 ?
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
                  text-center bg-white hover:bg-gray-200">
                {
                  rowData.map((item, indexData) => {
                    let newData = '';
                    if (indexData == 1) {
                      newData = item.split('-');
                    }
                    return (
                      indexData == 1 ?
                      <td key={indexData} className="text-left flex flex-col">
                        <span>{newData[0]}</span>
                        <span className="text-sm font-light">
                          {newData[1]} -
                          <strong className="font-semibold pl-1">
                            {newData[2]}
                          </strong>
                        </span>
                      </td>
                      :
                      indexData == 2 ?
                      <td
                        key={indexData}
                        onClick={() => {
                          router.push('/clubs/' + item.toLowerCase());
                        }}
                        className="text-center cursor-pointer"
                      >
                        <img src={`/images/${item}.svg`}
                          className="h-10 w-10 m-auto"
                        />
                      </td>
                      :
                      indexData == rowData.length - 1 ?
                      <td
                        key={indexData}
                        className="text-center w-11 xs:w-16"
                      >
                        {item}
                      </td>
                      :
                      <td
                        key={indexData}
                        className="text-center"
                      >
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
  )
}
