import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import CardTitle from "reactstrap/lib/CardTitle";
import Table from "reactstrap/lib/Table";
import { Link, withRouter } from "react-router-dom";
function SimpleListTable({ query_key, query_fn, filter, link, history }) {
    const orders_data = useQuery([query_key, filter], query_fn);

    const [orders, setorders] = useState([]);
    useEffect(() => {
        let cancel = true;
        if (cancel) {
            if (orders_data.data && orders_data.data.orders) {
                setorders(orders_data.data.orders);
            } else {
                setorders([])
            }
            cancel = false;
        }
    }, [orders_data.data]);
    return (
        <Card>
            <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
            </CardHeader>
            <CardBody>
                <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>User</th>
                            <th>Текст</th>
                            <th>Дата</th>
                            <th>Тип</th>
                            <th className="text-center">Избранные</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((item, key) => {
                            return (
                                <tr
                                    className={`${item.checked != null && item.checked == true ? '' : 'text-primary'}`}
                                    key={key} onClick={() => history.push(`${link}/${item.id}`)}>
                                    <td>{item.id}</td>
                                    <td>{item.visitor.id}</td>
                                    <td>{item.visitor.username}</td>
                                    <td>{item.text}</td>
                                    <td>{item.created_at}</td>
                                    <td>{item.type.name}</td>
                                    <td className="text-center"><i className="fa fa-star"></i></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </CardBody>
        </Card>

    );
};

export default withRouter(SimpleListTable)