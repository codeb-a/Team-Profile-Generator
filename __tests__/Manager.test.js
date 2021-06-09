const Manager = require("./../lib/Manager");

describe("Manager class", () => {
    it("has a officeNumber attribute", () => {
        const e = new Manager(2, 'scott brandon', 'bakers0729@gmail.com', '3333333333');
        expect(e.officeNumber).toBe('3333333333');
    });

    it("can get role via getRole()", () => {
        const e = new Manager(2, 'scott brandon', 'bakers0729@gmail.com', '3333333333');
        expect(e.getRole()).toBe('Manager');
    });

    it("can get officeNumber via officeNumber()", () => {
        const e = new Manager(2, 'scott brandon', 'bakers0729@gmail.com', '3333333333');
        expect(e.getOfficeNumber()).toBe('3333333333');
    });
});