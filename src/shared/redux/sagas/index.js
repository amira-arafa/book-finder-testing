import {SEARCH_RESULT_SAGA
        ,SEARCH_RESULT} from '../types';
import BooksApi from '../../../Apis/BooksApi';
import {takeEvery,call,put} from 'redux-saga/effects';
//-------------workers sagas--------------

//saga for getting results depending on a search word

function* getSearchResults(action){
    
    const {formValues}=action;
    console.log('saga search results ---> form values ' , formValues.SearchField);
    const response = yield call(BooksApi.getSearchResults,formValues.SearchField) 

    console.log('response from get result from search saga ==>> response', response.data.items);
    yield put({type:SEARCH_RESULT,payload:response.data.items})

}

//-------------watchers sagas-------------

export default function* rootSaga() {
   yield takeEvery(SEARCH_RESULT_SAGA,getSearchResults)
  }