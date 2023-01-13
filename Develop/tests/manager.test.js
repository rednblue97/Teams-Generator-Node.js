const Manager = require("../lib/manager");
const ieManager = new Manager("Lebron","987654","23@gmail.com","4");

it('run test for values of manager object', () => {
    expect(ieManager.name).toBe('Lebron');
    expect(ieManager.id).toBe('987654');
    expect(ieManager.email).toBe('23@gmail.com');
    expect(ieManager.roomNumber).toBe('4');
});

test('run test for name from getName() method', () => {
    expect(ieManager.getName()).toBe('Lebron');
});

test('run test for id from getId() method', () => {
    expect(ieManager.getId()).toBe('987654');
});

test('run test for email from getEmail() method', () => {
    expect(ieManager.getEmail()).toBe('23@gmail.com');
});

test('run test for GitHub from getRoomNumber() method', () => {
    expect(ieManager.getRoomNumber()).toBe('4')
});

test('run test for role from getRole() method', () => {
    expect(ieManager.getRole()).toBe('Manager');
});