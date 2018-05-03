import React, { PureComponent } from 'react';

class SignBlock extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="signBlock">
                <a id="signIn" href="#">Sign In</a>
                <a id="signOut" href="#">Sign Out</a>
            </div>
        );
    }
}

export default SignBlock