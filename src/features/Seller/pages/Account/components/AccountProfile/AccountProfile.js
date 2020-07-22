import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    LinearProgress,
    Modal,
    Typography,
    Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import StoreImg from "../../../../../../assets/images/store_img.png";
import DraggableUploader from "../../../../../../components/imageUploader/DraggableUploader";

const useStyles = makeStyles((theme) => ({
    root: {},
    details: {
        display: "flex",
    },
    avatar: {
        marginLeft: "auto",
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0,
    },
    progress: {
        marginTop: theme.spacing(2),
    },
    uploadButton: {
        marginRight: theme.spacing(2),
    },
}));

const AccountProfile = (props) => {
    const { className, user, actions, ...rest } = props;

    const [openModal, setOpenModal] = useState(false);
    const [openAlertRemove, setOpenAlertRemove] = useState(false);

    const classes = useStyles();

    const { name, address } = user;
    const avatar = user.avatar || StoreImg;

    function generateBodyModal() {
        const bodyModal = (
            <div style={{}} className="body">
                <Card className="">
                    <CardContent>
                        <DraggableUploader title="Chọn ảnh cửa hàng" />
                    </CardContent>
                    <Divider />
                    <CardActions
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <Button color="primary" variant="contained">
                            Lưu lại
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
        return bodyModal;
    }

    function handleRemove() {
        setOpenAlertRemove(true);
        actions.handleRemoveAvatar();
    }
    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardContent>
                <div className={classes.details}>
                    <div>
                        <Typography gutterBottom variant="h2">
                            {name}
                        </Typography>
                        <Typography
                            className={classes.locationText}
                            color="textSecondary"
                            variant="body1"
                        >
                            {address}
                        </Typography>
                    </div>
                    <Avatar className={classes.avatar} src={avatar} />
                </div>
                <div className={classes.progress}>
                    <Typography variant="body1">Độ hài lòng: 70%</Typography>
                    <LinearProgress value={70} variant="determinate" />
                </div>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    className={classes.uploadButton}
                    color="primary"
                    variant="text"
                    onClick={() => setOpenModal(true)}
                >
                    Thay ảnh cửa hàng
                </Button>
                <Button variant="text" onClick={handleRemove}>
                    Xóa ảnh cửa hàng
                </Button>
            </CardActions>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className="Modal"
            >
                {generateBodyModal()}
            </Modal>
            <Snackbar
                open={openAlertRemove}
                autoHideDuration={6000}
                onClose={() => setOpenAlertRemove(false)}
            >
                <Alert
                    onClose={() => setOpenAlertRemove(false)}
                    severity="warning"
                >
                    Đã xóa ảnh hiện tại. Hệ thống sẽ sử dụng ảnh mặc định
                </Alert>
            </Snackbar>
        </Card>
    );
};

AccountProfile.propTypes = {
    className: PropTypes.string,
    user: PropTypes.object,
};

export default AccountProfile;
