import React, { useEffect } from "react";
import MaterialTable from "material-table";

import adminApi from "../../../../api/adminApi";

export default function Sellers() {
    const [state, setState] = React.useState({
        columns: [
            { title: "Tên", field: "name" },
            { title: "Email", field: "surname" },
            { title: "Sđt", field: "surname" },
            { title: "Địa chỉ", field: "birthYear" },
            {
                title: "Avatar",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
        ],
        data: [
        ],
    });

    useEffect(() => {
        // execute after first render
        (async () => {
            try {
                let params = {
                    // page: 1,
                    // perPage: 2,
                    role: 1,
                };
                const response = await adminApi.get(params);
                // let action = await getBooksSeller(response);
                // let resDispatch = dispatch(action);
                var users=[]
                for(let i=0;i<response.data.length;i++){
                    console.log(response.data[i])
                    const result={
                        name:response.data[i].username,
                        email:response.data[i].email,
                        phone:response.data[i].phone,
                        address:response.data[i].address
                    }
                    console.log(result)
                    users.push(result)
                }
                setState({
                    columns: [
                        { title: "Tên", field: "name" },
                        { title: "Email", field: "email" },
                        { title: "Sđt", field: "phone" },
                        { title: "Địa chỉ", field: "address" },
                        {
                            title: "Avatar",
                            field: "birthCity",
                            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
                        },
                    ],
                    data:users
                })
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
        return () => {
            // execute when unmount
        };
    }, []);

    return (
        <MaterialTable
            title="Quản lý tài khoản người mua"
            options={{
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                },
                rowStyle: {
                    backgroundColor: '#EEE'
                }
            }}
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}
