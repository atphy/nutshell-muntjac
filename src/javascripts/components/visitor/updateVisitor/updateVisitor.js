import './updateVisitor.scss';
import utils from '../../../helpers/utils';
import visitorData from '../../../helpers/data/visitorData';
import auth from '../../../helpers/data/authData';
import buildVisitors from '../displayVisitor/visitor';

const makeGenderSelectForm = (visitor) => {
  const domString = `
    <select class="form-control" id="edit-gender-val" value="${visitor.gender}">
      <option ${(visitor.gender === 'he/him') ? 'selected' : ''}>he/him</option>
      <option ${(visitor.gender === 'she/her') ? 'selected' : ''}>she/her</option>
      <option ${(visitor.gender === 'per/per') ? 'selected' : ''}>per/per</option>
      <option ${(visitor.gender === 'they/them') ? 'selected' : ''}>they/them</option>
      <option ${(visitor.gender === 've/ver') ? 'selected' : ''}>ve/ver</option>
      <option ${(visitor.gender === 'xe/xem') ? 'selected' : ''}>xe/xem</option>
      <option ${(visitor.gender === 'ze/hir') ? 'selected' : ''}>ze/hir</option>
    </select>
  `;
  return domString;
};

const updateVisForm = (visitorId) => {
  if (!auth.isAuthenticated()) return;
  visitorData.getVisitorById(visitorId)
    .then((response) => {
      const visitor = response.data;

      let domString = `
      <h3>Update Visitor</h3>
        <form class="formUpdate" id="${visitorId}">
          <div class="form-group col-sm-8">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="edit-name-val" placeholder="First & Last Name" value="${visitor.name}">
          </div>
          <div class="col-sm-2">
          <label >Gender:</label>`;
      domString += makeGenderSelectForm(visitor);
      domString += `
          </div>
          <div class="col-sm-2">
          <label>Attendance:</label>
          <input type="text" class="form-control" id="edit-atten-val" value="${visitor.attendance}">
          </input>
          </div>
          <button class="btn btn-primary" id="visitorUpdate">Submit</button>
        </form>
    `;
      utils.printToDom('#new-vis-form', domString);
    })
    .catch((err) => console.error('update visitor form broke', err));
};

const updateVisEvent = (e) => {
  if (!auth.isAuthenticated()) return;
  updateVisForm(e.target.closest('.card').id);
};

const updateVisitor = (e) => {
  if (!auth.isAuthenticated()) return;
  const updateVisitorId = e.target.closest('#visitorUpdate').form.id;
  const editedVisitor = {
    name: $('#edit-name-val').val(),
    gender: $('#edit-gender-val').val(),
    attendance: $('#edit-atten-val').val() * 1,
  };
  visitorData.updateVis(updateVisitorId, editedVisitor)
    .then(() => {
      buildVisitors.printVisitor();
      utils.printToDom('#new-vis-form', '');
    })
    .catch((err) => console.error('update visitor broke', err));
};

export default {
  updateVisitor,
  updateVisForm,
  updateVisEvent,
};
