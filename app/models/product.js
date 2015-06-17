import DS from 'ember-data';

export default DS.Model.extend({
  dateCreated: DS.attr('date'),
  name: DS.attr('string'),
  //shortName: DS.attr('string'),
  brand: DS.attr('string'),
  category: DS.attr('string'),
  price: DS.attr('number'),
  size: DS.attr('number'),
  sizeUnit: DS.attr('number'),
  retailer: DS.attr('string'),
  ingredients: DS.attr('string'),
  image: DS.attr('string'),
  inStock: DS.attr('boolean')
});
