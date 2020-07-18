import visitor from '../visitor/visitor';
import visitorData from '../../helpers/data/visitorData';

const deleteVisitor = (e) => {
  const visitorCardId = (e.target.closest('.card').id);
  visitorData.deleteVisitor(visitorCardId)
    .then(() => {
      visitor.printVisitor(e.target.id);
    })
    .catch((err) => console.error('delete visitor broke', err));
};

export default { deleteVisitor };
