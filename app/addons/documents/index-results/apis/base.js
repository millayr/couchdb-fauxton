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

import ActionTypes from '../actiontypes';

export const nowLoading = () => {
  return {
    type: ActionTypes.INDEX_RESULTS_REDUX_IS_LOADING
  };
};

export const resetState = () => {
  return {
    type: ActionTypes.INDEX_RESULTS_REDUX_RESET_STATE
  };
};

export const newResultsAvailable = (docs, params, canShowNext) => {
  return {
    type: ActionTypes.INDEX_RESULTS_REDUX_NEW_RESULTS,
    docs: docs,
    params: params,
    canShowNext: canShowNext
  };
};

export const newSelectedDocs = (selectedDocs = []) => {
  return {
    type: ActionTypes.INDEX_RESULTS_REDUX_NEW_SELECTED_DOCS,
    selectedDocs: selectedDocs
  };
};

export const selectDoc = (doc, selectedDocs) => {
  // locate the doc in the selected docs array if it exists
  const indexInSelectedDocs = selectedDocs.findIndex((selectedDoc) => {
    return selectedDoc._id === doc._id;
  });

  // if the doc exists in the selectedDocs array, remove it. This occurs
  // when a user has deselected or unchecked a doc from the list of results.
  if (indexInSelectedDocs > -1) {
    selectedDocs.splice(indexInSelectedDocs, 1);

  // otherwise, add the _deleted: true flag and push it on to the array.
  } else {
    doc._deleted = true;
    selectedDocs.push(doc);
  }

  return newSelectedDocs(selectedDocs);
};

export const bulkCheckOrUncheck = (docs, selectedDocs, allDocumentsSelected) => {
  docs.forEach((doc) => {
    // find the index of the doc in the selectedDocs array
    const indexInSelectedDocs = selectedDocs.findIndex((selectedDoc) => {
      return (doc._id || doc.id) === selectedDoc._id;
    });

    // remove the doc if we know all the documents are currently selected
    if (allDocumentsSelected) {
      selectedDocs.splice(indexInSelectedDocs, 1);
    // otherwise, add the doc if it doesn't exist in the selectedDocs array
    } else if (indexInSelectedDocs === -1) {
      selectedDocs.push({
        _id: doc._id || doc.id,
        _rev: doc._rev || doc.rev || doc.value.rev,
        _deleted: true
      });
    }
  });

  return newSelectedDocs(selectedDocs);
};

export const changeLayout = (newLayout) => {
  return {
    type: ActionTypes.INDEX_RESULTS_REDUX_CHANGE_LAYOUT,
    layout: newLayout
  };
};

export const changeTableHeaderAttribute = (newField, selectedFields) => {
  selectedFields[newField.index] = newField.newSelectedRow;
  return {
    type: ActionTypes.INDEX_RESULTS_REDUX_CHANGE_TABLE_HEADER_ATTRIBUTE,
    selectedFieldsTableView: selectedFields
  };
};

