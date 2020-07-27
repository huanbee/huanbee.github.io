import React, { Component } from "react";

class JsxExtend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 5,
            students: [
                {
                    id: 1,
                    name: "Thu",
                    class: "REACTJS",
                },
                {
                    id: 2,
                    name: "Manh",
                    class: "REACTJS",
                },
                {
                    id: 3,
                    name: "Toan",
                    class: "REACTJS",
                },
            ],
        };
    }
    onNumberChange = (event) => {
        this.setState({
            number: Number(event.target.value),
        });
    };

    getStudentList = () => {
        var rows = [];
        const { students } = this.state;
        for (let i = 0; i < students.length; i++) {
            rows.push(
                <tr>
                    <td>{students[i].id}</td>
                    <td>{students[i].name}</td>
                    <td>{students[i].class}</td>
                </tr>
            );
        }
        return rows;
    };

    render() {
        const { number } = this.state;
        console.log(number);
        let message;
        if (number % 2 == 0) {
            message = <p>You entered a even number</p>;
        } else {
            message = <p>You entered a odd number</p>;
        }
        return (
            <div>
                <table className="table table-dark">
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>CLASS</td>
                    </tr>
                    {/* {this.getStudentList()} */}
                    {this.state.students.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.class}</td>
                        </tr>
                    ))}
                </table>

                <input
                    onChange={this.onNumberChange}
                    type="number"
                    value={this.state.number}
                />
                {message}
                {number % 2 == 0 ? (
                    <p>You entered a even number</p>
                ) : (
                    <p>You entered a odd number</p>
                )}

                {number > 10 ? (
                    <p style={{ color: "red" }}>
                        You entered a number bigger than 10
                    </p>
                ) : null}

                {number > 10 && (
                    <p style={{ color: "red" }}>
                        You entered a number bigger than 10
                    </p>
                )}
            </div>
        );
    }
}

export default JsxExtend;
