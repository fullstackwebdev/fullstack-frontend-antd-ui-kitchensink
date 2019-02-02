import React from 'react';
import { Comment, Avatar } from 'antd';

const ExampleComment = ({ children }) => (
    <Comment
        actions={[<span>Reply to</span>]}
        author={<a>Han Solo</a>}
        avatar={(
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
        )}
        content={<p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).</p>}
    >
        {children}
    </Comment>
);



const Nested = () => {
    return (
        <div>
            <ExampleComment>
                <ExampleComment>
                    <ExampleComment />
                    <ExampleComment />
                </ExampleComment>
            </ExampleComment>

        </div>
    )
}

export default Nested
