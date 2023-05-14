const heading1 = React.createElement("h1", {
    id: "heading1"
}, "Heading 2");
const heading2 = React.createElement("h1", {
    id: "heading1"
}, "Heading 2");
const conatainer = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(conatainer);

//# sourceMappingURL=index.7c0ccee6.js.map
