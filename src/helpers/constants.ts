import { BACK_UP_STATUS, BoxItem } from '../components/UsagePicker';
import { CategoryItem } from './types';

export const CATEGORY_LIST: CategoryItem[] = [
  {
    name: 'usage',
    value: 'Usage',
  },
  {
    name: 'top-up',
    value: 'Top up',
  },
  {
    name: 'results',
    value: 'Results',
  },
];

export enum PLACEHOLDER_TEXT {
  title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}

export const ENERGY_USING_ITEMS: BoxItem[] = [
  {
    name: 'lights',
    value: 'Lights',
    status: BACK_UP_STATUS.BACKED,
  },
  {
    name: 'tv',
    value: 'TV',
    status: BACK_UP_STATUS.BACKED,
  },
  {
    name: 'internet',
    value: 'Internet',
    status: BACK_UP_STATUS.NOTBACKED,
  },
  {
    name: 'fridge',
    value: 'Fridge*',
    status: BACK_UP_STATUS.BACKED,
  },
  {
    name: 'alarm',
    value: 'Alarm',
    status: BACK_UP_STATUS.BACKED,
  },
  {
    name: 'geyser',
    value: 'Geyser',
    status: BACK_UP_STATUS.BACKED,
  },
  {
    name: 'stove',
    value: 'Stove',
    status: BACK_UP_STATUS.BACKED,
  },
  {
    name: 'aircon',
    value: 'Aircon',
    status: BACK_UP_STATUS.BACKED,
  },
  {
    name: 'poolPump',
    value: 'Pool pump',
    status: BACK_UP_STATUS.NOTBACKED,
  },
  {
    name: 'ten',
    value: 'Ten',
    status: BACK_UP_STATUS.NOTBACKED,
  },
];
