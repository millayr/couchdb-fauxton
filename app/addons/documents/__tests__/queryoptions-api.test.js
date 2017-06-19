// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

import * as Api from '../index-results/apis/queryoptions';
import ActionTypes from '../index-results/actiontypes';

describe('Docs Query Options API', () => {
  it('resetFetchParamsBeforeExecute returns proper fetch params', () => {
    const perPage = 20;
    expect(Api.resetFetchParamsBeforeExecute(perPage)).toEqual({
      limit: 21,
      skip: 0
    });
  });

  it('queryOptionsToggleVisibility returns the proper event to dispatch', () => {
    const newVisibility = true;
    expect(Api.queryOptionsToggleVisibility(newVisibility)).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        isVisible: true
      }
    });
  });

  it('queryOptionsToggleReduce returns the proper event to dispatch', () => {
    const previousReduce = true;
    expect(Api.queryOptionsToggleReduce(previousReduce)).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        reduce: false
      }
    });
  });

  it('queryOptionsUpdateGroupLevel returns the proper event to dispatch', () => {
    const newGroupLevel = 'exact';
    expect(Api.queryOptionsUpdateGroupLevel(newGroupLevel)).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        groupLevel: 'exact'
      }
    });
  });

  it('queryOptionsToggleByKeys returns the proper event to dispatch', () => {
    const previousShowByKeys = true;
    expect(Api.queryOptionsToggleByKeys(previousShowByKeys)).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        showByKeys: false,
        showBetweenKeys: true
      }
    });
  });

  it('queryOptionsToggleBetweenKeys returns the proper event to dispatch', () => {
    const previousShowBetweenKeys = true;
    expect(Api.queryOptionsToggleBetweenKeys(previousShowBetweenKeys)).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        showBetweenKeys: false,
        showByKeys: true,
      }
    });
  });

  it('queryOptionsUpdateBetweenKeys returns the proper event to dispatch', () => {
    const newBetweenKeys = {
      include: true,
      startkey: '\"_design\"',
      endkey: '\"_design\"'
    };
    expect(Api.queryOptionsUpdateBetweenKeys(newBetweenKeys)).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        betweenKeys: {
          include: true,
          startkey: '\"_design\"',
          endkey: '\"_design\"'
        }
      }
    });
  });

  it('queryOptionsUpdateByKeys returns the proper event to dispatch', () => {
    const newByKeys = ['foo', 'bar'];
    expect(Api.queryOptionsUpdateByKeys(newByKeys)).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        byKeys: ['foo', 'bar']
      }
    });
  });

  it('queryOptionsToggleDescending returns the proper event to dispatch', () => {
    const previousDescending = true;
    expect(Api.queryOptionsToggleDescending(previousDescending)).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        descending: false
      }
    });
  });

  it('queryOptionsUpdateSkip returns the proper event to dispatch', () => {
    const newSkip = 5;
    expect(Api.queryOptionsUpdateSkip(newSkip)).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        skip: 5
      }
    });
  });

  it('queryOptionsUpdateLimit returns the proper event to dispatch', () => {
    const newLimit = 50;
    expect(Api.queryOptionsUpdateLimit(newLimit)).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        limit: 50
      }
    });
  });

  it('queryOptionsToggleIncludeDocs returns the proper event to dispatch', () => {
    const previousIncludeDocs = true;
    expect(Api.queryOptionsToggleIncludeDocs(previousIncludeDocs)).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        includeDocs: false
      }
    });
  });

  it('queryOptionsFilterOnlyDdocs returns the proper event to dispatch', () => {
    expect(Api.queryOptionsFilterOnlyDdocs()).toEqual({
      type: ActionTypes.INDEX_RESULTS_REDUX_NEW_QUERY_OPTIONS,
      options: {
        betweenKeys: {
          include: false,
          startkey: '\"_design\"',
          endkey: '\"_design0\"'
        },
        showBetweenKeys: true,
        showByKeys: false
      }
    });
  });
});
