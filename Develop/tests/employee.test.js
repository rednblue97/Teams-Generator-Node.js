//Requires the employee library, gets the name, id and email
const Employee = require("../lib/employee");
const ieEmployee =  new Employee('Rob', '2295579','robp@gmail.com','Employee');

//Creating an exmaple employee for the test

it('run test for values of employee object', () => {
    expect(ieEmployee.name).toBe('Rob');
    expect(ieEmployee.id).toBe('2295579');
    expect(ieEmployee.email).toBe('robp@gmail.com');
});
//Tests for the getName() function
test('run test for name from getName() method', () => {
    expect(ieEmployee.getName()).toBe('Rob');
});
//Tests for the getId() function
test('run test for id from getId() method', () => {
    expect(ieEmployee.getId()).toBe('2295579');
});
//Tests for the getEmail() function
test('run test for email from getEmail() method', () => {
    expect(ieEmployee.getEmail()).toBe('robp@gmail.com');
});
//Tests for the getRole() function
test('run test for role from getRole() method', () => {
    expect(ieEmployee.getRole()).toBe('Employee');
});

