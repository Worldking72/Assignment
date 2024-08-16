import React from "react";

const Stats = ({toDoList}) => {
    let countList = toDoList.length;
    return <div className="stats">stats
        <p className="notify">
            {countList===0
            ? ` you got everything ! ready to go `
            : ` you have ${countList} items on your
            list. `}
       </p>
    </div>;


};

export default Stats;