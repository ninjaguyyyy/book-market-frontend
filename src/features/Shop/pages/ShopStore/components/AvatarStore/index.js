import React from "react";

import AvatarImg from "../../../../../../assets/images/store_img.png";
import "./index.scss";

export default function AvatarStore() {
    return (
        <div className="avatar-store">
            <img className="avatar" src={AvatarImg} alt="avatar" />
            <p>
                Cửa hàng từ: <b>Nguyễn Hữu Chí</b>
            </p>
        </div>
    );
}
