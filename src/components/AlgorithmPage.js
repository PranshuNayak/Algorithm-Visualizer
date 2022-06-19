import React from "react";
import AlgorithmContent from '../components/AlgorithmContent'
function BubbleSort({overview,code,analysis,children}) {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-12">
      <AlgorithmContent
        heading="Overview"
        text={overview}
       
      />
      </div>
      <div className="col-12">
      <AlgorithmContent
        heading="code"
        text={code}
        
      />
      </div>
      <div className="col-12">
      <AlgorithmContent
        heading="analysis"
        text={analysis}
        
      />
      </div>
    
      <div className="col-12">
        {
          children
        }
      </div>
    
    </div>
  );
}

export default BubbleSort;
