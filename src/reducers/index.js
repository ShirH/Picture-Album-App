import { combineReducers } from 'redux';

import PhotoList from './photo_list_reducer';
import Modal from './modal_reducer';

const rootReducer = combineReducers({
  photos: PhotoList,
  isModalOpen: Modal
});

export default rootReducer;
