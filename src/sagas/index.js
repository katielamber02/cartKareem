import {take,put,all, takeLatest,fork,call} from 'redux-saga/effects'
import {
  FETCH_PRODUCTS,
    FETCH_CART,
    ADD_TO_CART
} from '../actions'
import * as productApi from '../libs/api'
import * as cartApi from '../libs/cart/api'
import {
    fetchProductsSuccess,
    fetchCartSuccess,
    fetchCartFailure,
    addToCartSuccess,
    addToCartFailure
  } from '../actions'



/*
productApi.fetchAll()
		 .then((products)=>console.log('products:',products))
*/
let mySaga=function*(){
  console.log('saga begins')
  const state=yield take("SET_STATE")
  console.log("Got state",state)
  const state1=yield take("SET_NEW_STATE")
  console.log("Got state1",state1)
}

let putSaga=function*(){
  yield put({type:"SET_STATE",value:42})
  yield put({type:'SET_NEW_STATE',value:52})
}

function*fetchProducts(action){
  console.log('fetchProducts')
  const products=yield call(productApi.fetchAll)
  yield put(fetchProductsSuccess(products))
  console.log('products',products)
}


function*watchFetchProducts(){
  
  console.log('watchFetchProducts')
  yield takeLatest(FETCH_PRODUCTS,fetchProducts)
   
}


function*productsSaga(){
  console.log('productsSaga')
  yield fork(watchFetchProducts)
}

//CART SAGA

function* fetchCart(){
  try{
    const cart=yield call(cartApi.fetch)
    yield put(fetchCartSuccess(cart))
  }catch(error){
    yield put(fetchCartFailure(error))
  }  

  
}
function* addToCart(action){
  try{
    const cart=yield call(cartApi.addCartItem,action.productId,action.quantity)
    yield put(addToCartSuccess(cart))
  }catch(error){
    yield put( addToCartFailure)
  }
}
function* watchFetchCart(){
  yield takeLatest(FETCH_CART,fetchCart)
}
function* watchAddCart(){
  yield takeLatest(ADD_TO_CART,addToCart)
}

function* cartSaga(){
  yield fork(watchFetchCart)
  yield fork(watchAddCart)
}


let allSagas=function*(){
  yield all([
    mySaga(),
    putSaga(),
    productsSaga(),
    cartSaga()
  ])
}
export default allSagas