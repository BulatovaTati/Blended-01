import { formatDistanceToNow, format } from 'date-fns';

export const dataFromating = date => {
  return formatDistanceToNow(new Date(date));
};

export const dataFromatingPp = date => {
  return format(new Date(date), 'Pp');
};
