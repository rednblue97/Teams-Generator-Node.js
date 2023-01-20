//Requires the engineer library
const Engineer = require("../lib/engineer");
const ieEngineer = new Engineer('Mark','1234567','cuban@gmail.com','Neonlighters');
//Expects the appropriate values for the engineer, github 
it('run test for values of engineer object', () => {
    expect(ieEngineer.name).toBe('Mark');
    expect(ieEngineer.id).toBe('1234567');
    expect(ieEngineer.email).toBe('cuban@gmail.com');
    expect(ieEngineer.gitHub).toBe('Neonlighters')
});

test('run test for name from getName() method', () => {
    expect(ieEngineer.getName()).toBe('Mark');
});

test('run test for id from getId() method', () => {
    expect(ieEngineer.getId()).toBe('1234567');
});

test('run test for email from getEmail() method', () => {
    expect(ieEngineer.getEmail()).toBe('cuban@gmail.com');
});
//Test for the getGitHub() and tests for the getRole() for engineer
test('run test for GitHub from getRole() method', () => {
    expect(ieEngineer.getGitHub()).toBe('Neonlighters')
})
test('run test for role from getRole() method', () => {
    expect(ieEngineer.getRole()).toBe('Engineer');
});

