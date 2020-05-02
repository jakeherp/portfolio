import moment from 'moment';

export const age = (birthday: string) => moment().diff(birthday, 'years');
