import {Thing} from './Thing';
import {Common} from './types/Common';

export interface Category extends Common {
  parentCategory?: undefined | Category;
  subCategories?: Category[];
  things?: Thing[];
}
