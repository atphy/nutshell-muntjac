import visitor from './visitor';
import visitorData from '../../helpers/data/visitorData';
import auth from '../../helpers/data/authData';

const deleteVisitor = (e) => {
  if (!auth.isAuthenticated()) return;
  const visitorCardId = (e.target.closest('.card').id);
  visitorData.deleteVisitor(visitorCardId)
    .then(() => {
      visitor.printVisitor(e.target.id);
    })
    .catch((err) => console.error('delete visitor broke', err));
};

export default { deleteVisitor };
