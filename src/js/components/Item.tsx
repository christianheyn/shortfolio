import * as React from 'react';

interface ItemProps {
    params: {
        id: number;
    };
    id: number;
    name: string;
};

interface ItemStates {
    items: Object[];
};

class Item extends React.Component<ItemProps, ItemStates> {
    public render(): JSX.Element {
        return <div>Single Item {this.props.params.id}</div>;
    }
}

export default Item;
