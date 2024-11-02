import moment from 'moment';

export const formatDateYYYYMMDD = (date: string) => {
  return moment(date).format('YYYY-MM-DD');
};
