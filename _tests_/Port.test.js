/* eslint-env jest */
const Port = require('../src/Port.js');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('has a name', () => {
    const port = new Port('Dover');
    expect(port.name).toBe('Dover');
  });

  it('has no ships by default', () => {
    const port = new Port('Dover');
    expect(port.ships).toHaveLength(0);
  });

  it('can add a ship', () => {
    const port = new Port('Dover');
    const ship = jest.fn();
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });

  it('can remove a ship', () => {
    const port = new Port('Dover');
    const titanic = jest.fn();
    const queenMary = jest.fn();
    const reetu = jest.fn();
    port.addShip(titanic);
    port.addShip(queenMary);
    port.addShip(reetu);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic, reetu]);
  });
});
