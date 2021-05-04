class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
        this.inc = this.inc.bind(this)
    }

    inc() {
        this.setState(state => ({
            count: state.count + 1
        }));

        if (this.state.count == 10) {
            this.setState(state => ({
                count: 1,
            }));
        }
    }

    render() {
        return (
            <div>
                <div class="col-md-12 text-center counter">
                    <h1>Counter</h1>
                </div>
                <div class="col-md-12 text-center">
                    <button type="button" id="inc" class="btn btn-success btn-circle btn-lg" onClick={this.inc}>Go</button>
                </div>
                <div class="col-md-12 text-center">
                    <h1>Count: {this.state.count}</h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById("root"));