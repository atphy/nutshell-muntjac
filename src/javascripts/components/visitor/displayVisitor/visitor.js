import './visitor.scss';
import authData from '../../../helpers/data/authData';
import visitorData from '../../../helpers/data/visitorData';
import utils from '../../../helpers/utils';

const getVisitorLog = () => utils.readData('visitorLog');
const allCost = [];

const getExpenses = () => {
  let totalCost = 0;
  getVisitorLog()
    .then((expenses) => {
      expenses.forEach((expense) => {
        const expenseNum = expense.cost;
        allCost.push(expenseNum);
        const sumExpenses = allCost.reduce;
        totalCost += sumExpenses;
      });
    })
    .catch((err) => console.error('could not add total cost', err));
  console.error(allCost);
  console.error(totalCost);
};

const showLog = () => $('#visitor-activity').toggleClass('hide');
// const sumOfExpenses = () => {
//   const addExpenses = (total, num) => total + num;
//   const reduceExpense = totalCost.reduce(addExpenses);
//   const totalExpense = reduceExpense();
//   console.error(totalExpense);
//   console.error(totalCost);
// };

const printVisitor = () => {
  visitorData.getVisitorData()
    .then((visitors) => {
      let domString = `
      <div id="visitor-div">
        <h2 class="text-center" id="vis-heading">Visitors<h2>
        <div class="text-center mb-3" id="add-button"></div>
        <button type="button" class="btn btn-success" id="buy-something"><i class="fas fa-dollar-sign"></i>Buy Something</button>
        <button type="button" class="btn btn-warning" id="visitor-log-btn"><i class="fas fa-clipboard-list"></i>Visitor Activity</button>
          <div id="new-vis-form"></div>
          <div class="d-flex flex-wrap vis-container">
          `;
      visitors.forEach((visitor) => {
        domString += `
          <div id="${visitor.id}" class="card visitor" style="width: 18rem;">
            <div class="vis-card-body">
              <h4 class="vis-card-title">${visitor.name}</h4>
              <p class="attend">Attendance: ${visitor.numberOfVisits} visits</p>
              <p class="attend">Total amount spent: $${visitor.amtSpent}</p>`;

        if (authData.isAuthenticated()) {
          domString += `
            <div class="vis-card-buttons">
              <a href="#" class="btn btn-warning update-visitor" id="update-visitor">Edit</a>
              <a href="#" class="btn btn-danger remove-visitor" id="remove-visitor">Delete</a>
            </div>  
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
      <div id="visitor-activity" class="hide"></div>
       `;
      utils.printToDom('#content', domString);
      authData.checkLoginStatus();
    })
    .catch((err) => console.error('visitors broke', err));

  let domString = '';
  getVisitorLog()
    .then((visitorActivity) => {
      visitorActivity.forEach((activity) => {
        domString += `<p>${activity.name}: ${activity.activity} - ${activity.cost}</p>`;
      });
      utils.printToDom('#visitor-activity', domString);
    })
    .catch((err) => console.error('could not print log', err));
  $('body').on('click', '#visitor-log-btn', showLog);
  getExpenses();
};

export default { printVisitor };
