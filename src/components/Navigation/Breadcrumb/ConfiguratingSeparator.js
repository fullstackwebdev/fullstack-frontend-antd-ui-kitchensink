import React from 'react'

import { Breadcrumb } from 'antd';


const ConfiguratingSeparator = () => {
    return (
        <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default ConfiguratingSeparator
