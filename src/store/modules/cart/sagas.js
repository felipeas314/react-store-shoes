import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../service/api';
import { formatPrice } from '../../../util/format';

import { addToCartSucess, updateAmount } from './actions';

function* addToCart({ id }) {
  const pruductExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = pruductExists ? pruductExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    console.log('error');
    return;
  }

  if (pruductExists) {
    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    };

    yield put(addToCartSucess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
