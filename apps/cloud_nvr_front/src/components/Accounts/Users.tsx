import * as React from 'react';
import { connect } from 'dva';

import Pagination from 'antd/lib/pagination';
import Table from "antd/lib/table";
import Popconfirm from "antd/lib/popconfirm";
import "antd/dist/antd.less";

import * as styles from './Users.less';


import { PAGE_SIZE } from '../../constants';

export interface IUsersProps {
    list: any[];
    total: number;
    page: number
};


function Users({ list: dataSource, total, page: current } : IUsersProps) {
    function deleteHandler(id:any) {
        console.warn(`TODO: ${id}`);
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text:any) => <a href="">{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Operation',
            key: 'operation',
            render: (text :any, record: any) => (
                <span className={styles.operation}>
                    <a href="">Edit</a>
                  <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
                    <a href="">Delete</a>
                  </Popconfirm>
                </span>
            ),
        },
    ];

    return (
        <div className={styles.normal}>
            <div>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowKey={record => record.id}
                    pagination={false}
                />
                <Pagination
                    className="ant-table-pagination"
                    total={total}
                    current={current}
                    pageSize={PAGE_SIZE}
                />
            </div>
        </div>
    );
}

export default Users;

// function mapStateToProps(state) {
//     const { list, total, page } = state.users;
//     return {
//         list,
//         total,
//         page,
//     };
// }
//
// export default connect(mapStateToProps)(Users);