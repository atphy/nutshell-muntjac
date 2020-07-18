import './updateVisitor.scss';
import utils from '../../../helpers/utils';
import visitorData from '../../../helpers/data/visitorData';
// import buildVisitors from '../displayVisitor/visitor';

const makeGenderSelectForm = (visitor) => {
  const domString = `
    <select class="form-control" id="edit-gender-val" value="${visitor.gender}">
      <option ${(visitor.gender === 'm') ? 'selected' : ''}>m</option>
      <option ${(visitor.gender === 'f') ? 'selected' : ''}>f</option>
    </select>
  `;
  return domString;
};

const updateVisForm = (visitorId) => {
  visitorData.getVisitorById(visitorId)
    .then((response) => {
      const visitor = response.data;

      let domString = `
      <h3>Update Visitor</h3>
        <form id=${visitor.id}>
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
          <button class="btn btn-primary" id="addVisitor">Submit</button>
        </form>
    `;
      utils.printToDom('#new-vis-form', domString);
    })
    .catch((err) => console.error('update visitor broke', err));
};

const updateVisEvent = (e) => {
  updateVisForm(e.target.closest('.card').id);
};

export default {
  updateVisForm,
  updateVisEvent,
};
