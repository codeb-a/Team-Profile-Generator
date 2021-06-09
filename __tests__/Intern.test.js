const Intern = require("./../lib/Intern");

describe("Intern class", () => {
    it("has a school attribute", () => {
        const e = new Intern(4, 'mandy', 'mandygmail.com', 'blues clues');
        expect(e.school).toBe('blues clues');
    });

    it("can get role via getRole()", () => {
        const e = new Intern(4, 'mandy', 'mandy@gmail.com', 'blues clues');
        expect(e.getRole()).toBe('Intern');
    });

    it("can get school via getSchool()", () => {
        const e = new Intern(4, 'mandy', 'mandy@gmail.com', 'blues clues');
        expect(e.getSchool()).toBe('blues clues');
    });
});