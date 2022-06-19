import { createContext, useState } from "react";
import VisualizerForm from "../components/VisualizerForm";
import VisualizerArea from "../components/VisualizerArea";


export const VisualizerContext = createContext();

export const SortingVisualizer = ({ name, algorithm }) => {
  const style = {
    backgroundColor:"#E8B4B4",
    opacity:'0.36',
    borderRadius:'30px',
}
  const [size, setSize] = useState(0);
  const [array, setArray] = useState("");
  const [result, setResult] = useState({});
  

  const getArray = () => {
    let arr = [];
    let temp = "";
    for (let i = 0; i < array.length; i++) {
      if (array[i] == " ") {
        arr.push(Number(temp));
        temp = "";
      } else {
        temp += array[i];
      }
    }
    arr.push(Number(temp));
    let answer = algorithm(arr, size);
    setResult({ ...result, answer });
  };

  return(
    <div className="row shadow-lg  justify-content-center align-items-center p-5" id="visualizer" style={style}>
        <VisualizerContext.Provider value={{
            name,
            array,
            size,
            result,
            getArray,
            setArray,
            setSize,
            setResult,
            
        }}>
        <VisualizerForm/>
        <VisualizerArea/>
        </VisualizerContext.Provider>
    </div>
  )
};
