const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
    this.dinosaurs.pop(dinosaur);
};

Park.prototype.mostPopular = function() {
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > )
};

module.exports = Park;