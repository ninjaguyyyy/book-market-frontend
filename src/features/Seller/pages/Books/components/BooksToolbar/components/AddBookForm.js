import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik, Form, FastField } from "formik";
import * as Yup from "yup";
import { Grid, TextField } from "@material-ui/core";

import DraggableUploader from "../../../../../../../components/imageUploader/DraggableUploader";
import InputField from "../../../../../../../components/custom-field/InputField";
import SelectField from "../../../../../../../components/custom-field/SelectField";
import { TYPE_BOOK } from "../../../../../../../constants/options";

export default class AddBookForm extends Component {
    static propTypes = {
        prop: PropTypes,
    };
    constructor(props) {
        super(props);
        this.state = {};
        this.initialValues = {
            name: "",
            author: "",
            category: "",
            price: "",
            description: "",
            quantity: 1,
        };
        this.validationSchema = Yup.object().shape({
            name: Yup.string().required("Vui lòng không để trống."),
            author: Yup.string().required("Vui lòng không để trống."),
            category: Yup.string().required("Vui lòng không để trống"),
            price: Yup.number().required("Vui lòng không để trống"),
            quantity: Yup.number().required("Vui lòng không để trống"),
        });
    }

    render() {
        return (
            <Formik initialValues={this.initialValues}>
                {(formikProps) => {
                    const { values, errors, touched } = formikProps;
                    return (
                        <Form>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <FastField
                                        category="text_thin"
                                        name="name"
                                        component={InputField}
                                        label="Tên sách *"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FastField
                                        category="text_thin"
                                        name="author"
                                        component={InputField}
                                        label="Tác giả *"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <Grid item md={12} xs={12}>
                                        <FastField
                                            category="text_thin"
                                            name="quantity"
                                            component={InputField}
                                            label="Số lượng bán *"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <FastField
                                            category="text_thin"
                                            name="price"
                                            component={InputField}
                                            label="Giá bán *"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <FastField
                                            category="category_book"
                                            name="category"
                                            component={SelectField}
                                            label="Loại sách"
                                            options={TYPE_BOOK}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item md={6} style={{ marginTop: "8px" }}>
                                    {/* <Grid item md={12} xs={12}> */}
                                    <FastField
                                        category="multiple"
                                        name="description"
                                        component={InputField}
                                        label="Mô tả *"
                                        row={6}
                                    />
                                    {/* </Grid> */}
                                </Grid>
                                <Grid item md={12}>
                                    <Grid
                                        item
                                        md={12}
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <DraggableUploader title="Chọn ảnh bìa" />
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    md={12}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <DraggableUploader title="Chọn ảnh chụp sách" />
                                </Grid>
                            </Grid>
                        </Form>
                    );
                }}
            </Formik>
        );
    }
}
