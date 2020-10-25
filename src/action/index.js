import {PRESS_ALL} from '../constants';
import {PRESS_ONE} from '../constants';

export function pressAll() {
  return {
    type: PRESS_ALL,
  };
}

export function pressOne(id) {
  return {
    type: PRESS_ONE,
    id,
  };
}



