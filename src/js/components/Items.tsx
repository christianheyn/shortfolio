import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Item from './Item';
import { receiveItemlist } from '../actions';
import jsonP from '../utils/jsonp';

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
        
        let url: string = 'https://api.behance.net/v2/users/chrisheyn/projects?client_id=uzo64WUMaI8seQcQWGRQCD1q6GJ6Uqhx';

        jsonP(url, (data): void => {
            this.props.dispatch(receiveItemlist(data.projects));
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
