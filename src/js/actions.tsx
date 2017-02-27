export const FETCH_ITEMLIST = 'FETCH_ITEMLIST';
export const FETCH_ERROR_ITEMLIST = 'FETCH_ERROR_ITEMLIST';
export const RECEIVE_ITEMLIST = 'RECEIVE_ITEMLIST';

export interface Action {
    type: string;
    payload: Object;
};

export function fetchItemlist(): Action {
	return {
		type: FETCH_ITEMLIST,
		payload: null
	}
}

export function fetchErrorItemlist(err: Error): Action {
	return {
		type: FETCH_ERROR_ITEMLIST,
		payload: err
	}
}

export function receiveItemlist(items: Object[]): Action {
	return {
		type: RECEIVE_ITEMLIST,
		payload: items
	}
}