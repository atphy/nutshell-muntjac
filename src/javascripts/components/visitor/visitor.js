import './visitor.scss';
import visitorData from '../../helpers/data/visitorData';
import utils from '../../helpers';

const printVisitor = () => {
  visitorData.getVisitorData()
    .then((visitor) =>{
      let domstring =`
      <div id="visitorDiv">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
       `
    })
};