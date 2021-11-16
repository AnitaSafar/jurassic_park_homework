const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  // let dinosaur3;
  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 60);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 30);
    // dinosaur3 = new Dinosaur('spinosaurus', 'carnivore', 15);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 60)
  });
    

  it('should have a collection of dinosaurs', function() {
    const expected = [];
    assert.deepStrictEqual(expected, park.dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(expected, park.dinosaurs);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(dinosaur1);
    const expected = [];
    assert.deepStrictEqual(expected, park.dinosaurs);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
