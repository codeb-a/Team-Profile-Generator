const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("has a github attribute", () => {
        const e = new Engineer(3, 'Dwight', 'Dwight@gmail.com', 'Dwight@github.com');
        expect(e.github).toBe('Dwight@github.com');
    });

    it("can get role via getRole()", () => {
        const e = new Engineer(3, 'Dwight', 'Dwight@gmail.com', 'Dwight@github.com');
        expect(e.getRole()).toBe('Engineer');
    });

    it("can get github via getGithub()", () => {
        const e = new Engineer(3, 'Dwight', 'Dwight@gmail.com', 'Dwight@github.com');
        expect(e.getGithub()).toBe('Dwight@github.com');
    });
});