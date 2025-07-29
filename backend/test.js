const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://smarabi121:eNpbpOS4s74KDDMu@cluster0.tvgtiiv.mongodb.net/simple-crm?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
