class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
            title: 'Visibility Toggle',
            details: 'These are the details that I\'m hiding'
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}> {this.state.visibility ? 'Hide Details' : 'Show Details'} </button>
                {this.state.visibility && <p>{this.state.details}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// console.log('Visibility Toggle is running!')

// const app = {
//     title: "Visiblity Toggle",
//     details: "These are details that I am toggling"
// };

// let showDetails = false;

// const toggleDetails = () => {
//     showDetails = !showDetails;
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleDetails}>{showDetails ? "Hide Details" : "Show Details"}</button>
//             {showDetails && <p>{app.details}</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();