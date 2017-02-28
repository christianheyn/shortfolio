import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Item from './Item';
import { receiveItemlist } from '../actions';
import { fetchBehanceApi } from '../utils/jsonp';
import { BE_API_PROJECTS } from '../const';


interface ItemsProps {
    dispatch: Function;
    itemList: Object[];
};

interface ItemData {
    id: number;
    name: string;
    covers: Object
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
        
        try {
            fetchBehanceApi(BE_API_PROJECTS, (data): void => {
                if (data && data.projects) {
                    this.props.dispatch(receiveItemlist(data.projects));
                } else {
                    throw new Error(
                        `Behance API result does not not match needed structure. Do you run this code on correct environments with the right permissions?`
                    );
                }
            });
        } catch(err) {
            throw new Error('Can not fetch projects from Behance.');
        }
        
    }

    public render(): JSX.Element {
        const items: JSX.Element[] = this.props.itemList.map(
                (item: ItemData, i: number) => {
                    return (
                        <Link to={`/items/${item.id}`} key={item.id}>
                            <img src={item.covers[404]} />
                            <h1>{item.name}</h1>
                            <br />
                        </Link>);
                }
            );

        return (<div>{items}</div>);
    }
}

export default Items;
