import {FASTEST,CHEAPIEST } from '../constants';

export const getFastTickets = () => {
    return {
        type: FASTEST,
    }
}
export const getCheapTickets = () => {
    return {
        type: CHEAPIEST,
    }
}