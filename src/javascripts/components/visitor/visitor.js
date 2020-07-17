import './visitor.scss';
import visitorData from '../../helpers/data/visitorData';
import utils from '../../helpers/utils';

const printVisitor = () => {
  visitorData.getVisitorData()
    .then((visitors) => {
      let domString = `
      <div id="visitorDiv">
        <h2 class="text-center">Visitors<h2>
        <div class="d-flex flex-wrap">`;

      visitors.forEach((visitor) => {
        domString += `
          <div id="${visitor.id}" class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${visitor.name}</h5>
              <p class="gender">${visitor.gender}</p>
              <p class="attend">${visitor.attendance}</p>
              <a href="#" class="btn btn-primary" id="add-visitor"><i class="fas fa-plus"></i></a>
              <a href="#" class="btn btn-primary" id="delete-visitor"><i class="fas fa-trash"></i></a>
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
