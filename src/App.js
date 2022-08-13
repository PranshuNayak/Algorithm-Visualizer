import MergeSort from "./screens/MergeSort";
import SelectionSort from "./screens/SelectionSort";
import InsertionSort from "./screens/InsertionSort";
import BubbleSort from "./screens/BubbleSort";
import {Routes,Route} from 'react-router-dom'
import LandingPage from "./screens/LandingPage";



function App() {
  return (
      <div className="container-fluid p-0 overflow-hidden" style={{backgroundColor:"#fed7d7"}}>
         <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/merge-sort" element={<MergeSort/>} />
        <Route path="/insertion-sort" element={<InsertionSort/>} />
        <Route path="/selection-sort" element={<SelectionSort/>} />
        <Route path="/bubble-sort" element={<BubbleSort/>} />
      </Routes>
      </div>
  );
}

export default App;
