import React, {Component, createContext} from "react";
import Children from './contextChildren';

const {Provider, Consumer} = createContext();

export {Consumer}

class R076_ContextApi extends Component {
    render() {
        return(
            <Provider value='React'>
                <Children />
            </Provider>
        )
    }
}
export default R076_ContextApi;
