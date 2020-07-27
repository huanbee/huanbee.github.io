import React, { Component } from "react";
import { fetchStatistic } from "../api/index";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                numberCustomer: 0,
                numberMedicine: 0,
                numberMedicineOutStock: 0,
                numberPres: 0
            },
        };
    }

    componentDidMount() {
        fetchStatistic()
            .then((resp) => {
                console.log(resp);
                this.setState({
                    data: resp.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                HomePage: <br/>
                NumberCustomer: { data.numberCustomer } <br/>
                NumberOfMedicine: { data.numberMedicine } <br/>
                NumberMedicineOutStock: { data.numberMedicineOutStock }
                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                    }}
                >
                    Logout
                </button>
            </div>
        );
    }
}

export default Home;
