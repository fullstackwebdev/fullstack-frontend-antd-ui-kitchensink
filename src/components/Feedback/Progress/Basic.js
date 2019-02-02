import React from 'react'

import { Progress } from 'antd';


const Basic = () => {
    return (
        <>
            <div>
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
            </div>
            <div>
                <Progress type="circle" percent={75} />
                <Progress type="circle" percent={70} status="exception" />
                <Progress type="circle" percent={100} />
            </div>
            <div style={{ width: 170 }}>
                <Progress percent={30} size="small" />
                <Progress percent={50} size="small" status="active" />
                <Progress percent={70} size="small" status="exception" />
                <Progress percent={100} size="small" />
            </div>
        </>
    )
}

export default Basic
