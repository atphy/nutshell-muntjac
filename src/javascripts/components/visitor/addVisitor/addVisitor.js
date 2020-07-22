import './addVisitor.scss';
import utils from '../../../helpers/utils';
import visitorData from '../../../helpers/data/visitorData';
import buildVisitors from '../displayVisitor/visitor';
import auth from '../../../helpers/data/authData';

const showVisForm = () => {
  if (!auth.isAuthenticated()) return;
  const domString = `
    <form id="vis-form">
      <div class="form-group col-sm-8">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name-val" placeholder="First & Last Name">
      </div>
      <div class="col-sm-2">
      <label >Gender:</label>
      <select class="form-control" id="gender-val">
        <option>he/him</option>
        <option>she/her</option>
        <option>per/per</option>
        <option>they/them</option>
        <option>ve/ver</option>
        <option>xe/xem</option>
        <option>ze/hir</option>
      </select>
      </div>
      <div class="col-sm-2">
      <label>Attendance:</label>
      <select class="form-control" id="atten-val">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      </div>
      <button class="btn btn-primary" id="addVisitor">Submit</button>
    </form>
    `;
  if (!$('#vis-form').length) {
    utils.printToDom('#new-vis-form', domString);
  } else {
    $('#new-vis-form').toggleClass('hide');
  }
};

const addVisitorEvent = () => {
  if (!auth.isAuthenticated()) return;
  const newVisitor = {
    name: $('#name-val').val(),
    gender: $('#gender-val').val(),
    attendance: $('#atten-val').val() * 1,
  };
  visitorData.addVisitor(newVisitor)
    .then(() => {
      buildVisitors.printVisitor();
      utils.printToDom('#new-vis-form', '');
    })
    .catch((err) => console.error('add visitor broke', err));
};
export default {
  showVisForm,
  addVisitorEvent,
};
