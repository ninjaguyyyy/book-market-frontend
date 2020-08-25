import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import CancelIcon from "@material-ui/icons/Cancel";

import userApi from "../../../../api/userApi";

import "./index.scss";

function renderStatus(id) {
    let msg;
    if (id === 0) {
        msg = "Chưa xác nhận";
    } else if (id === 1) {
        msg = "Đã xác nhận";
    } else if (id === 2) {
        msg = "Đã hoàn thành";
    } else {
        msg = "Đã hủy";
    }
    return msg;
}

export default function Orders() {
    const [columns, setColumns] = useState([
        {
            title: "Giỏ hàng",
            field: "cart",
            render: (rowData) => {
                return rowData.cart.map((item) => <div>{item}</div>);
            },
        },
        {
            title: "Tổng tiền",
            field: "totalPrice",
        },
        {
            title: "Trạng thái",
            field: "status",
        },
        {
            title: "Thao tác",
            field: "action",
            render: (rowData) => {
                return (
                    <div className="action">
                        <CancelIcon
                            className="icon"
                            color="error"
                            onClick={() => handleChangeStatus(rowData, 3)}
                        />
                    </div>
                );
            },
        },
    ]);
    const [data, setData] = useState([
        {
            cart: ["default1", "default2"],
            totalPrice: 0,
            status: "default",
            action: "1",
        },
    ]);

    useEffect(() => {
        (async function () {
            let response = await userApi.getOrders();
            if (response.success) {
                setData(
                    response.orders.map((order) => {
                        return {
                            cart: order.cart.productList.map((product) => {
                                return `${product.productID.title} - ${product.amount}`;
                            }),
                            totalPrice: order.cart.totalPrice+'.000đ',
                            status: renderStatus(order.status),
                            action: order._id,
                        };
                    })
                );
            }
        })();
        return () => {
            // do something
        };
    }, []);

    const handleChangeStatus = (rowData, status) => {
        (async function () {
            let response = await userApi.cancelOrder(rowData.action, status);
            if (response.success) {
                setData(
                    response.orders.map((order) => {
                        return {
                            customer:
                                order.customer.name || order.customer.username,
                            cart: order.cart.productList.map((product) => {
                                return `${product.productID.title} - ${product.amount}`;
                            }),
                            totalPrice: order.cart.totalPrice+'.000đ',
                            status: renderStatus(order.status),
                            action: order._id,
                        };
                    })
                );
            }
        })();
    };

    return (
        <div className="orders-buyer">
            <MaterialTable
                title="Đơn hàng của tôi"
                columns={columns}
                data={data}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setData([...data, newData]);
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    const dataUpdate = [...data];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    setData([...dataUpdate]);
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);
                            }, 600);
                        }),
                }}
            />
        </div>
    );
}
