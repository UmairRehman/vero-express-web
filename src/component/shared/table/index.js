import { Table } from 'antd';

function CustomTable({ data, columns }) {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default CustomTable;