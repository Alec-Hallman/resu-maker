import "./ResumeStyle.css";
const MapHeader = ({ order, data, titles }) => {
  console.log(titles);
  return (
    <>
      {order.map((item, index) => {
        return (
          <>
            <p className="Section-head">{item}</p>
            {data[order[index]].map((selection) => {
              return (
                <>
                  {titles.includes(selection) ? (
                    <>
                      <p className="Section-title">{selection}</p>
                    </>
                  ) : (
                    <li className="Section-content">{selection}</li>
                  )}
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
};
export default MapHeader;
