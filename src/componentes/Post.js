import React from 'react';
import Comentario from './Comentario'

export default class Post extends React.Component {
    render() {
        return (
            <div>
                <h2>POST: {this.props.title}</h2>
                <Comentario text="Bom post" />
            </div>
        );
    }
}