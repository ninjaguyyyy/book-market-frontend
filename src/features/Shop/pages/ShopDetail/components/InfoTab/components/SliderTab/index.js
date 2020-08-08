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
                    <div
                        onClick={() => console.log("click")}
                        onKeyDown={() => console.log("click")}
                        role="menuitem"
                        tabIndex="9"
                    >
                        <img
                            style={{ display: "block", width: "100%" }}
                            src="http://res.cloudinary.com/dwuma83gt/image/upload/v1583501371/anyi9w3ar5ytnt003lsu.jpg"
                            alt="Album one"
                        />
                    </div>
                    <img
                        style={{ display: "block", width: "100%" }}
                        src="http://res.cloudinary.com/dwuma83gt/image/upload/v1583501368/j5xxmasgwwluxujbkpcj.jpg"
                        alt="Album two"
                    />
                    <img
                        style={{ display: "block", width: "100%" }}
                        src="https://picsum.photos/id/1019/1000/600/"
                        alt="Album three"
                        data-action="https://doce.cc/"
                    />
                    <img
                        style={{ display: "block", width: "100%" }}
                        src="https://res.cloudinary.com/dwuma83gt/image/upload/v1577631966/Auction/Tools-for-Product-Marketing_ebngnp.jpg"
                        alt="Album four"
                    />
                    <img
                        style={{ display: "block", width: "100%" }}
                        src="https://static2.yan.vn/YanNews/2167221/201910/cong-ty-momoland-bi-to-uu-ai-nancy-ep-thanh-vien-roi-nhom-ebb29fdf.jpg"
                        alt="Album four"
                    />
                    <img
                        style={{ display: "block", width: "100%" }}
                        src="https://static2.yan.vn/YanNews/2167221/201910/cong-ty-momoland-bi-to-uu-ai-nancy-ep-thanh-vien-roi-nhom-ebb29fdf.jpg"
                        alt="Album four"
                    />
                    <img
                        style={{ display: "block", width: "100%" }}
                        src="https://static2.yan.vn/YanNews/2167221/201910/cong-ty-momoland-bi-to-uu-ai-nancy-ep-thanh-vien-roi-nhom-ebb29fdf.jpg"
                        alt="Album four"
                    />
                </Coverflow>
            </div>
        );
    }
}
