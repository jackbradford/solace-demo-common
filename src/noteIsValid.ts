import { Note } from './types';

export const noteIsValid = async (note: Note) => {

  const checks = [
    (n: Note) => !!n.body,
    (n: Note) => n.body.length >= 20,
    (n: Note) => n.body.length <= 300
  ];

  return checks.every(check => check(note));
}

