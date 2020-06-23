import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import { makeStyles } from "@material-ui/styles";
import {
    Card,
    CardActions,
    CardContent,
    Avatar,
    Typography,
    Divider,
    Button,
    LinearProgress,
} from "@material-ui/core";

const AccountProfile = (props) => {
    const { className, ...rest } = props;

    const user = {
        name: "Shen Zhi",
        city: "Los Angeles",
        country: "USA",
        timezone: "GTM-7",
        avatar: "/images/avatars/avatar_11.png",
    };

    return (
        <Card {...rest} className={clsx("AccountProfile", className)}>
            <CardContent>
                <div className="details">
                    <div>
                        <Typography gutterBottom variant="h2">
                            John Doe
                        </Typography>
                        <Typography color="textSecondary" variant="body1">
                            {user.city}, {user.country}
                        </Typography>
                        <Typography color="textSecondary" variant="body1">
                            {moment().format("hh:mm A")} ({user.timezone})
                        </Typography>
                    </div>
                    <Avatar className="avatar" src={user.avatar} />
                </div>
                <div className="progress">
                    <Typography variant="body1">
                        Profile Completeness: 70%
                    </Typography>
                    <LinearProgress value={70} variant="determinate" />
                </div>
            </CardContent>
            <Divider />
            <CardActions>
                <Button className="uploadButton" color="primary" variant="text">
                    Upload picture
                </Button>
                <Button variant="text">Remove picture</Button>
            </CardActions>
        </Card>
    );
};

AccountProfile.propTypes = {
    className: PropTypes.string,
};

export default AccountProfile;
