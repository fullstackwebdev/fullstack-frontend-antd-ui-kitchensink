import React from 'react'

import { Skeleton } from 'antd';

const Basic = () => {
    return (
        <>
            <div>
                <Skeleton />
            </div>
            <div>
                <Skeleton avatar paragraph={{ rows: 4 }} />
            </div>
            <div>
                <Skeleton active />
            </div>
        </>
    )
}

export default Basic
