import React from 'react';

export default class Area extends React.Component {
    constructor() {
        super();
    }

    render() {
        const title = this.props.params.title;
        return <div>
            <h1>{title}</h1>
            <p>..............</p>
        </div>;
    }
}