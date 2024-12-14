import { formatDistanceToNow } from 'date-fns';

export const dataFromating = date => {
  return formatDistanceToNow(new Date(date));
};
