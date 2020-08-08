import React from "react";
import { Button } from "reactstrap";

import AvatarUser from "../../../../../../../../assets/images/man.svg";
import "./index.scss";

export default function AddComment() {
    return (
        <div className="add-comment">
            <div className="wrapper">
                <img src={AvatarUser} alt="avatar" width={50} />
                <div className="input">
                    <input
                        type="text"
                        placeholder="Đăng lên nhận xét của bạn ..."
                    />
                </div>
            </div>
            <div className="action">
                <Button outline color="primary">
                    Xác nhận
                </Button>
            </div>
        </div>
    );
}
