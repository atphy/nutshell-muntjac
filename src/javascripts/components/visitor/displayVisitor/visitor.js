import './visitor.scss';
import authData from '../../../helpers/data/authData';
import visitorData from '../../../helpers/data/visitorData';
import utils from '../../../helpers/utils';

const printVisitor = () => {
  visitorData.getVisitorData()
    .then((visitors) => {
      let domString = `
      <div id="visitor-div">
        <h2 class="text-center">Visitors<h2>`;

      if (authData.isAuthenticated()) {
        domString += `
          <div id="new-vis">
            <button class="btn btn-primary" id="add-vis-form"><i class="fas fa-plus"></i> NEW VISITOR</button>
          </div>
          `;
      } else {
        domString += `
          <div class="hide" id="new-vis">
            <button class="btn btn-primary" id="add-vis-form"><i class="fas fa-plus"></i> NEW VISITOR</button>
          </div>
          `;
      }
      domString += `
          <div id="new-vis-form"></div>
          <div id="update-visitor"></div>
          <div class="d-flex flex-wrap vis-container">
          `;
      visitors.forEach((visitor) => {
        domString += `
          <div id="${visitor.id}" class="card visitor" style="width: 18rem;">
            <div class="vis-card-body">
              <h4 class="vis-card-title">${visitor.name}</h4>
              <p class="gender">Gender: ${visitor.gender}</p>
              <p class="attend">Attendance: ${visitor.attendance} visits</p>`;

        if (authData.isAuthenticated()) {
          domString += `
              <a href="#" class="btn btn-primary update-visitor" id="update-visitor"><i class="fas fa-edit"></i></a>
              <a href="#" class="btn btn-danger remove-visitor" id="remove-visitor"><i class="fas fa-trash"></i></a>
              `;
        } else {
          domString += `
        <a href="#" class="btn btn-primary hide" id="update-visitor"><i class="fas fa-edit"></i></a>
        <a href="#" class="btn btn-danger hide" id="remove-visitor"><i class="fas fa-trash"></i></a>
        `;
        }
        domString += `
            </div>
          </div>`;
      });
      domString += `
        </div>
      </div>
       `;
      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('visitors broke', err));
};

export default { printVisitor };
