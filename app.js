/* 

<div id="parent">

    <div id="child">

            <h1>or bhai kya haal hai</h1>
            <h1>india wc haar hya pen chod</h1>
    </div>

</div> */





/* const heading = React.createElement("h1", {}, "just learining react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */


const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"child1"},"or bhai kya haal hai"),React.createElement("h1",{id:"child2"},"penchod ")]))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);