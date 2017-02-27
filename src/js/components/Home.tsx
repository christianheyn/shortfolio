import * as React from 'react';
import { Link } from 'react-router';
import Header from './Header';

//import DatePicker from 'react-datepicker';

//require('react-datepicker/dist/react-datepicker.css');


interface StartProps {
    name: string;
};

class Start extends React.Component<StartProps, {}> {
    public render(): JSX.Element {
        return (
            <div>
                Home
            </div>
        );
    }
}

export default Start;
