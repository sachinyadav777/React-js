// code for nested structure.....
//  <div id = "parent">
//     <div id = "child">
//         <h1>hello h1</h1>
//         <h2>hello h2</h2>
//     </div>
//     <div id="child2">
//         <h3>hello 3</h3>
//     </div>
// </div> 
const parent = React.createElement("div", { id: "parent" },
 [React.createElement("div", { id: "child" },
  [React.createElement("h1", {}, "hello h1"), React.createElement("h2", {}, "hello h2")]),
   React.createElement("div", { id: "child2" },
    React.createElement("h3", {}, "hello 3"))]);

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(parent);
//  console.log(parent)