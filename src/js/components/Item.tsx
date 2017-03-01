import * as React from 'react';

interface ItemProps {
    params: {
        id: number;
        name: string;
    };
    id: number;
    name: string;
};

class Item extends React.Component<ItemProps, {}> {

    public render(): JSX.Element {
        return <div>Single Item {this.props.params.name}</div>;
    }
}

export default Item;
