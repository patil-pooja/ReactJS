import React from 'react';
export class Update extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count:0
        }
        console.log('constructor is invoked');
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('getDerivedStateFromProps is invoked');
        return null;
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log('shouldComponentUpdate is invoked');
        return true;
    }
    handle = () => {this.setState({count:this.state.count+1})}
    render()
    {
        console.log('render method is invoked');
        return (
            <div>
                <h1>count is {this.state.count}</h1>
                <button onClick={this.handle}>Increment</button>
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('getSnapshotBeforeUpdate is invoked');
        return 'hello students';
    }
    componentDidUpdate(prevProps, prevState, sn)
    {
        console.log('componentDidUpdate is invoked');
        console.log(sn);
    }
}