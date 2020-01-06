console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'An app that helps you decide.',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); //stops page load that happens by default with onSubmit attribute

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    } 
}

const onRemoveOptions = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor((Math.random() * app.options.length));
    const option = app.options[randomNum];
    console.log(randomNum)
    alert(option);
}

const appRoot = document.getElementById('app');

function renderApp(){
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? `Here are your options` : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveOptions}>Remove All</button>
            {/* {
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p> 
                })
            } */}
            <ol>
            {
                app.options.map((option) => {
                 return <li key={option}>{option}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();