const heading =React.createElement("h1",
{    //object
    id:"title",

},
"Namaste Everyone!!!"
);
const heading2 =React.createElement("h2",
{    //object
    id:"title",

},
"Welcome to the course!!!"
);

const container=React.createElement("div",{
id:"container",
},[heading,heading2]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
//passing a react method inside the root
root.render(container);