//import { ObjectID } from '../../../../Users/derek/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';

const mongoose = require('mongoose');

const Schema = mongoose.Schema,
       ObjectId = Schema.ObjectId;

const newsSchema = new Schema(
  {
    
    title: String,
    date: String,
    excerpt: String,
    link : String
  },
  {
    collection: 'newses',
    read: 'nearest'
  }
);
const News = mongoose.model('News', newsSchema);

module.exports = News;

/*Schema_Category.virtual('id').get(function() {
  return this._id;
});*/