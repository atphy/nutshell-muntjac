import './updateVisitor.scss';
import utils from '../../../helpers/utils';
import visitorData from '../../../helpers/data/visitorData';
import auth from '../../../helpers/data/authData';
import buildVisitors from '../visitor';

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
          <div class="col-sm-2">`;
      domString += `
          </div>
          <div class="col-sm-2">
          <label>Attendance:</label>
          <input type="text" class="form-control" id="edit-atten-val" value="${visitor.attendance}">
          </input>
          </div>
          <div class="col-sm-2">
          <label>Amount Spent:</label>
          <input type="integer" class="form-control" id="edit-amountSpent-val" value="${visitor.amtSpent}">
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
  e.preventDefault();

  if (!auth.isAuthenticated()) return;
  const updateVisitorId = e.target.closest('#visitorUpdate').form.id;
  const editedVisitor = {
    name: $('#edit-name-val').val(),
    attendance: $('#edit-atten-val').val() * 1,
    amtSpent: $('#edit-amountSpent-val').val() * 1,
    numberOfVisits: $('edit-numberOfVisits-val').val() * 1,
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
