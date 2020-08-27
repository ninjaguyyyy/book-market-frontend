import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import adminApi from "../../../../api/adminApi";
import { repeat } from "lodash";
import user from "../../../../reducers/user";
import { Modal } from "antd"
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'

async function handleClick (row){
    const {email,status}=row
    const params={
        email,
        status
    }
    await adminApi.changeStatus(params)
}

export default function Customer() {
    const [state, setState] = React.useState({
        columns: [
            { title: "Tên", field: "name" },
            { title: "Email", field: "email" },
            { title: "Sđt", field: "phone" },
            { title: "Địa chỉ", field: "address" },
            {
                title: "Status",
                field: "status",
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
                    role: 2,
                };
                const response = await adminApi.get(params);
                // let action = await getBooksSeller(response);
                // let resDispatch = dispatch(action);
                var users = []
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].status == 0) var status = "Đã bị ban"
                    else status = "Đang hoạt động"
                    const result = {
                        name: response.data[i].username,
                        email: response.data[i].email,
                        phone: response.data[i].phone,
                        address: response.data[i].address,
                        status: status
                    }

                    users.push(result)
                }
                setState({
                    columns: [
                        { title: "Tên", field: "name" },
                        { title: "Email", field: "email" },
                        { title: "Sđt", field: "phone" },
                        { title: "Địa chỉ", field: "address" },
                        {
                            title: "Status",
                            field: "status",
                        },
                    ],
                    data: users
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
        <div>
            <TableContainer>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow style={{backgroundColor:"#01579b"}}>
                            <TableCell style={{color: '#FFF'}}>Hành động</TableCell>
                            <TableCell style={{color: '#FFF'}}>Tên</TableCell>
                            <TableCell style={{color: '#FFF'}} align="right">Email</TableCell>
                            <TableCell style={{color: '#FFF'}} align="right">Số điện thoại</TableCell>
                            <TableCell style={{color: '#FFF'}} align="right">Địa chỉ</TableCell>
                            <TableCell style={{color: '#FFF'}} align="right">Trạng thái</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {state.data.map((row) => (
                            <TableRow key={row.name}  >
                               <TableCell> <Button variant="contained" size="small" color="secondary" onClick={() => handleClick(row)}>Cập nhật trạng thái</Button></TableCell> 
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell  align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
