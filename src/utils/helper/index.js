import { moment } from '../../libraries';

export const convertDate = date => {
    if (!date) return null;
    return moment(date).format("DD MMMM YYYY");
};