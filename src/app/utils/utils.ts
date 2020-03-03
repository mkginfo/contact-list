import {GroupUser, User} from '../models/user.model';

export const sortLetter = ( a, b ) => {
  if (a.letter < b.letter) {
    return -1;
  }
  if (a.letter > b.letter) {
    return 1;
  }
  return 0;
};

export const groupedUsersByFirstLetter = (list, filters): GroupUser[] => {
  const mapUserByFirstLetter = list.reduce((acc, c) => {
    const letter = c.name.first[0];
    acc[letter] = (acc[letter] || []).concat(c);
    return acc;
  }, {});

  return Object.keys(mapUserByFirstLetter).map((key, index) => {
    return {
      letter: key,
      users: mapUserByFirstLetter[key]
    };
  }).sort(sortLetter);
};
