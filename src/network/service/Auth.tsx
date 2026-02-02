import {store} from '../../store/Store';
import {clearAppSlice, updateUser} from '../../store/slices/AppSlice';
import {clearAuthSlice} from '../../store/slices/AuthSlice';
import SharedPreference from '../../utility/storage/SharedPreference';

export const syncUserProfile = async (user?: any) => {
  if (user != null) {
    await SharedPreference.setItem('user', JSON.stringify(user));
    store.dispatch(updateUser(user));
  } else {
    await SharedPreference.removeItem('user');
    store.dispatch(clearAppSlice());
    store.dispatch(clearAuthSlice());
  }
};
