import React from "react";

import AvatarUser from "../../../../../../../../assets/images/woman.svg";
import "./index.scss";

export default function Comment() {
    return (
        <div className="comment">
            <img src={AvatarUser} alt="avatar" width={40} />
            <div className="info">
                <div className="author">
                    <b>Nguyen Huu Chi</b> <span>8 phút trước</span>
                </div>
                <p>Không biết cmt này tới 2020 được bao nhiêu like</p>
            </div>
        </div>
    );
}
