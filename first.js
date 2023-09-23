// first program 
const heading = React.createElement("h1" , {className: "max" , id: "elelment"}, "HELLO WORLD from react");
console.log(heading) // reactElement > object
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(heading); // convert in HTML