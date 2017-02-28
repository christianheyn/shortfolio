import * as React from 'react';
import { jsonp } from '../utils/jsonp';

interface ItemProps {
    params: {
        id: number;
        name: string;
    };
    id: number;
    name: string;
};

interface ItemStates {
    items: Object[];
};

class Item extends React.Component<ItemProps, ItemStates> {

    protected componentWillMount(): void {
        //this.getData();
    }

    public render(): JSX.Element {
        return <div>Single Item {this.props.params.name}</div>;
    }
}

export default Item;
