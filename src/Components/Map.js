import Selectbutton from "./SelectButton";

const Map = ({ items, onClick, tag, title }) => {
  var test = items[0];
  var itemTitle = "";
  return (
    <div>
      {items[0] !== undefined ? (
        <>
          {" "}
          {items.map((item, index) => {
            var title = item[0];
            return (
              <>
                <p
                  style={{
                    fontSize: "60%",
                    marginBottom: "0vw",
                    marginLeft: "1%",
                    fontWeight: "500",
                  }}
                >
                  {item[0]}
                </p>
                {items[index].map((item, index) => {
                  return (
                    <>
                      {index === 0 || item === "" ? (
                        <></>
                      ) : (
                        <div style={{ marginBottom: ".5vw" }}>
                          <Selectbutton
                            onClick={() => {
                              onClick(item, tag, title);
                            }}
                          ></Selectbutton>
                          <span
                            style={{ fontSize: "50%", marginTop: "-100vw" }}
                          >
                            {item}
                          </span>
                        </div>
                      )}
                    </>
                  );
                })}
              </>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Map;
