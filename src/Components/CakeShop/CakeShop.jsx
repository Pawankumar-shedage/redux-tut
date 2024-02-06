import { getCake } from "./CakeAction";
import { useDispatch, useSelector } from "react-redux";

export const CakeShop = () => {
  const dispatchAction = useDispatch();
  const cakes = useSelector((state) => state.cake);

  return (
    <>
      <div>CakeShop</div>
      <div>
        Available Cakes :
        {typeof cakes == "object"
          ? Object.entries(cakes).map((item, index) => (
              <ul key={index}>
                <li>
                  {item[0]} : {item[1]}
                </li>
              </ul>
            ))
          : cakes}
      </div>
      <button onClick={() => dispatchAction(getCake())}>Get Cakes</button>
    </>
  );
};
