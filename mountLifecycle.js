import React from 'react';
export class Mount extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:'abc'
        }
        console.log('constructor is invoked');
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('getDerivedStateFromProps is invoked');
        console.log(props);
        console.log(state);
        return null;
    }
    render()
    {
        console.log('render method is invoked');
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>City: {this.props.city}</h1>
            </div>
        )
    }
    componentDidMount()
    {
        console.log('componentDidMount is invoked');
    }

}