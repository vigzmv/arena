const Queues = require('../../queue');

function handler(req, res) {
  Queues.setConfig(req.app.get('queue config'));
  const queues = Queues.list();

  return res.render('dashboard/templates/queueList', { queues });
}

module.exports = handler;
