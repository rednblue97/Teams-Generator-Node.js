const Intern = require("../lib/intern");
const ieIntern = new Intern('Luka','134679','luka@gmail.com','UoD');

it('run test for values of intern object', () => {
    expect(ieIntern.name).toBe('Luka');
    expect(ieIntern.id).toBe('134679');
    expect(ieIntern.email).toBe('luka@gmail.com');
    expect(ieIntern.school).toBe('UoD');
});

test('run test for name from getName() method', () => {
    expect(ieIntern.getName()).toBe('Luka');
});

test('run test for id from getId() method', () => {
    expect(ieIntern.getId()).toBe('134679');
});

test('run test for email from getEmail() method', () => {
    expect(ieIntern.getEmail()).toBe('luka@gmail.com');
});

test('run test for school from getSchool() method', () => {
    expect(ieIntern.getSchool()).toBe('UoD')
})
test('run test for role from getRole() method', () => {
    expect(ieIntern.getRole()).toBe('Intern');
});
