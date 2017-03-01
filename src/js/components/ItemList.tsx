import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Item from './Item';
import { receiveItemlist } from '../actions';
import { BehanceApi } from '../utils/api';
import { BE_API_GET_PROJECTS } from '../const';

let ItemListComponent;

class ItemList extends React.Component<ItemsProps, void> {

    protected componentWillMount(): void {
        if (this.props.itemList.length > 0) {
            return;
        }
        
        try {
            BehanceApi(BE_API_GET_PROJECTS, (data: BehanceProjects): void => {
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
                (item: BehanceProjectData, i: number) => {
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

ItemListComponent = connect((store: Store, props): State => {
    return {
        itemList: store.itemList
    };
})(ItemList);

export default ItemListComponent;
