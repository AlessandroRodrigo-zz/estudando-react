import React from 'react';

import Post from './Post'


export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Post title="Teste do carai" />
                <Post title="Teste do carai do carai" />
                <Post title="Teste do carai do carai do carai" />
            </div>
        );
    }
}