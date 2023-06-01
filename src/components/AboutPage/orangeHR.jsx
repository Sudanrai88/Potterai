import React from "react";

  export default function OrangeHR({lineWidth}) {
    const widthOfLine = {
      width: lineWidth,
    };
      return (<div style={widthOfLine}>
        <hr className="h-px border-[rgba(255,108,69,.4)] border-[1px]"></hr>
      </div>);
    }
  
  