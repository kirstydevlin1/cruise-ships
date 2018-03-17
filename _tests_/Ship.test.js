/* eslint-env jest */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');


describe('Ship', () => {
  describe('with a port and itinerary', () => {
    let ship;
    let port;

    beforeEach(() => {
      port = new Port('Dover');
      const itinerary = new Itinerary([port]);
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
      expect(ship.currentPort).toBe(port);
    });

    it('can set sail', () => {
      ship.setSail();

      expect(port.ships).not.toContain(ship);
      expect(ship.currentPort).toBeFalsy();
    });

    it('can be added to a port on instantiation', () => {
      expect(port.ships).toContain(ship);
    });
  });


  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.dock();

    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
});
