import * as React from 'react';
import { Link, IndexLink } from 'react-router';
import Header from './Header';

//import DatePicker from 'react-datepicker';

//require('react-datepicker/dist/react-datepicker.css');


interface AppProps {
    name: string;
};

class App extends React.Component<AppProps, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <ul role="nav">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/items" activeClassName="active">Items</Link></li>
                </ul>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;
