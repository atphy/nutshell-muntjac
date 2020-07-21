import './visitor.scss';
import visitorData from '../../helpers/data/visitorData';
import utils from '../../helpers/utils';

const printVisitor = () => {
  visitorData.getVisitorData()
    .then((visitors) => {
      let domString = `
      <div id="visitor-div">
        <h2 class="text-center">Visitors<h2>
          <div id="new-vis">
            <button class="btn btn-primary hide" id="add-vis-form"><i class="fas fa-plus"></i> NEW VISITOR</button>
          </div>
          <div id="new-vis-form"><div>
        <div class="d-flex flex-wrap">`;

      visitors.forEach((visitor) => {
        domString += `
          <div id="${visitor.id}" class="card" style="width: 18rem;">
            <div class="vis-card-body">
              <h4 class="vis-card-title">${visitor.name}</h4>
              <p class="gender">Gender: ${visitor.gender}</p>
              <p class="attend">Attendance: ${visitor.attendance} visits</p>
              <a href="#" class="btn btn-primary" id="update-visitor"><i class="fas fa-edit"></i></a>
              <a href="#" class="btn btn-danger" id="remove-visitor"><i class="fas fa-trash"></i></a>
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
