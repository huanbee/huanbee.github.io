// Class component
import React, { Component } from 'react'
import { Button } from 'antd'
import { LikeOutlined } from '@ant-design/icons';

interface Props {
    likeBy: number
}
interface State {
    like: number
}

class CatDescription extends React.Component<Props, State> {
    public static defaultProps: Partial<Props> = {
        likeBy: 1,
    };
    public state: State = {
        like: 0
    };
    public increase = () => {
        const likeby: number = this.props.likeBy!;
        const like = this.state.like + likeby;
        this.setState({ like })
    };


    public render(): React.ReactNode {
        return (
            <div>
                <p>Hello...it me.</p>
                <Button type="primary" shape="round" icon={<LikeOutlined />} size="small" onClick={this.increase}> Like: {this.state.like}</Button>
            </div>
        )
    }
}

export default CatDescription
