import React from 'react'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxes: {
                checkboxes: {
                    c1: false,
                    c2: false,
                    c3: false,
                    c4: false,
                }
            }
        }
    }

    onCheck(name, val) {
        const checkboxes = Object.assign({}, this.state.checkboxes, {});
        for (let key in checkboxes) {
            checkboxes[key] = key = false;
        }
        checkboxes[name] = true;
        checkboxes.selected = val;
        this.setState({ checkboxes });
    }

    render() {
        return (
            <div>
                <label>Selected: {this.state.checkboxes.selected}</label><br />
                C1<input
                    type="checkbox"
                    value="c1"
                    checked={this.state.checkboxes.c1}
                    onChange={(e) => this.onCheck('c1', e.target.value)}
                ></input>
                <label>Selected: {this.state.checkboxes.selected}</label><br />
                C2<input
                    type="checkbox"
                    value="c2"
                    checked={this.state.checkboxes.c2}
                    onChange={(e) => this.onCheck('c2', e.target.value)}
                ></input>
                <label>Selected: {this.state.checkboxes.selected}</label><br />
                C3<input
                    type="checkbox"
                    value = "c3"
                    checked= {this.state.checkboxes.c3}
                    onChange={(e) => this.onCheck('c3', e.target.value)}

                ></input>
                <label>Selected: {this.state.checkboxes.selected}</label><br />
                C4<input
                    type="checkbox"
                    value = "c4"
                    checked= {this.state.checkboxes.c4}
                    onChange={(e) => this.onCheck('c4', e.target.value)}
                ></input>
            </div>
        )
    }
}

