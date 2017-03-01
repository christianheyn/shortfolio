interface Window {
	[global: string]: any
}

interface ItemsProps {
    dispatch: Function;
    itemList: Object[];
}

interface BehanceProjectData {
    id: number;
    name: string;
    covers: {
    	[global: number]: string
    }
}

interface BehanceProjects {
	projects: BehanceProjectData[]
}

interface State {
    itemList: Object[] | {};
}

interface Store {
    itemList: Object[] | {};
}