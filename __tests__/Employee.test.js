const Employee = require("./../lib/Employee");

describe("Employee class", () => {
    it("creates and employee object", () => {
        const e = new Employee(1, 'brandon', 'brandonakers729@gmail.com');
        expect(typeof(e)).toBe("object");
    });

    it("has a name attribute", () => {
        const e = new Employee(1, 'brandon', 'brandonakers729@gmail.com');
        expect(e.name).toBe('brandon');
    });

    it("has a email attribute", () => {
        const e = new Employee(1, 'brandon', 'brandonakers729@gmail.com');
        expect(e.email).toBe('brandonakers729@gmail.com');
    });

    describe("can get id via getId()", () => {
        const e = new Employee(1, 'brandon', 'brandonakers729@gmail.com');
        expect(e.getId()).toBe(1);
    });

    describe("can get name via getName()", () => {
        const e = new Employee(1, 'brandon', 'brandonakers729@gmail.com');
        expect(e.getName()).toBe('brandon');
    });

    describe("can get email via getemail()", () => {
        const e = new Employee(1, 'brandon', 'brandonakers729@gmail.com');
        expect(e.getEmail()).toBe('brandonakers729@gmail.com');
    });

    describe("can get role via getRole()", () => {
        const e = new Employee(1, 'brandon', 'brandonakers729@gmail.com');
        expect(e.getRole()).toBe('Employee');
    });
});