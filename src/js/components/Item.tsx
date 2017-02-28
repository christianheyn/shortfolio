import * as React from 'react';
import jsonP from '../utils/jsonp';

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
    /*
    protected getData() {
        const url = `https://api.behance.net/v2/projects/${ this.props.params.id }?client_id=uzo64WUMaI8seQcQWGRQCD1q6GJ6Uqhx`;
        jsonP(url, (data): void => {
            this.props.projectData = data;
        });
    }*/

    protected componentWillMount(): void {
        //this.getData();
    }

    public render(): JSX.Element {

        //https://api.behance.net/v2/projects/46848293?client_id=uzo64WUMaI8seQcQWGRQCD1q6GJ6Uqhx
        return <div>Single Item {this.props.params.name}</div>;
    }
}

export default Item;
