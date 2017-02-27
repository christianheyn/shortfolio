import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Item from './Item';
import { receiveItemlist } from '../actions';

interface ItemsProps {
    dispatch: Function;
    itemList: Object[];
};

interface ItemData {
    id: number;
    name: string;
};

interface State {
    itemList: Object[] | {};
};

interface Store {
    itemList: Object[] | {};
};

@connect((store:Store):State => {
    return {
        itemList: store.itemList
    };
})

class Items extends React.Component<ItemsProps, void> {

    protected componentWillMount(): void {
        if (this.props.itemList.length > 0) {
            return;
        }

        window.fetch('./data/items.json')
            .then((response: Response) => {
                response
                    .json()
                    .then((json: ItemData[]) => {
                        console.log(3)
                        this.props.dispatch(receiveItemlist(json));
                    });
                });
    }

    public render(): JSX.Element {
        const items: JSX.Element[] = this.props.itemList.map(
                (item: ItemData, i: number) => {
                    return <Link to={`/items/${item.id}`} key={item.id}>{item.name}<br /></Link>;
                }
            );

        return (<div>{items}</div>);
    }
}

export default Items;
