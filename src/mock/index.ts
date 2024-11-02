import {TCategory} from '../types';
import {
  CameraVideo,
  CameraVideo02,
  FlagIcon,
  ImageIcon02,
  LocationIcon,
  SmileEllipseIcon,
  UserAddIcon,
} from '../assets/icons';

const MockDataIcons = [
  {
    icon: CameraVideo02,
    id: 1,
  },

  {
    icon: ImageIcon02,
    id: 2,
  },
  {
    icon: CameraVideo,
    id: 3,
  },
  {
    icon: LocationIcon,
    id: 4,
  },
  {
    icon: UserAddIcon,
    id: 5,
  },
  {
    icon: SmileEllipseIcon,
    id: 6,
  },
  {
    icon: FlagIcon,
    id: 7,
  },
];

const MockDataCategories: TCategory[] = [
  {
    id: 1,
    title: 'Thảo luận',
  },
  {
    id: 2,
    title: 'Đang chú ý',
  },
  {
    id: 3,
    title: 'Thành Viên',
  },
  {
    id: 4,
    title: 'Thảo luận',
  },
  {
    id: 5,
    title: 'Sự Kiện',
  },
  {
    id: 6,
    title: 'Ảnh',
  },
  {
    id: 7,
    title: 'Game',
  },
  {
    id: 8,
    title: 'Giải trí',
  },
];

export {MockDataIcons, MockDataCategories};
