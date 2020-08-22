import React, { Component } from "react";
import Coverflow from "react-coverflow";

export default class SliderTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1,
        };
    }
    componentDidMount() {
        this.setState({
            active: 0,
        });
    }
    render() {
        console.log(this.props.imgs);
        return (
            <div>
                <Coverflow
                    width={960}
                    height={480}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={false}
                    active={this.state.active}
                >
                    {this.props.imgs.map((img) => (
                        <img
                            style={{ display: "block", width: "100%" }}
                            src={img}
                            alt="Album one"
                        />
                    ))}
                </Coverflow>
            </div>
        );
    }
}
