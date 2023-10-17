import { BoxItem } from '../components/UsagePicker';

export type CategoryItem = {
  name: string;
  value: string;
};

export type TopUp = {
  name: string;
  value: number;
};

export interface FormState {
  energyUsers: BoxItem[];
  topUps: TopUp[];
}
