import React, {Component} from "react";
import cookie from 'react-cookies';

class R087_cookieRemove extends Component {
    componentDidMount() {
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 60);
        cookie.save('userid', 'react', {
            path: '/',
            expires,
        });
        setTimeout(() => {
            cookie.remove('userid', {path: '/'});
        }, 1000);
        setTimeout(() => {
            alert(cookie.load('userid'));
        }, 2000);
    }
    render() {
        return (
            <h3>react-cookies Remove</h3>
        )
    }

}

export default R087_cookieRemove;