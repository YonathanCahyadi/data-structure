const { test, expect, describe, beforeEach } = require("@jest/globals");
const LinkedList = require("../data-structure/LinkedList");

describe("Linked List", () => {
  const linkedList = new LinkedList();

  test("Initial State", () => {
    expect(linkedList.toString()).toBe(null);
  });

  describe("Element Manipulation", () => {
    beforeEach(() => {
      linkedList.clear();
      for (let i = 0; i < 10; i++) linkedList.addFirst(i);
    });

    describe("Add First", () => {
      test("Elements", () => {
        linkedList.addFirst("Hi");
        linkedList.addFirst("World");

        expect(linkedList.toString()).toMatch(
          "World -> Hi -> 9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> null"
        );
      });

      test("Count", () => {
        linkedList.addFirst("Hi");
        linkedList.addFirst("World");

        expect(linkedList.count).toBe(12);
      });
    });

    describe("Add Last", () => {
      test("Elements", () => {
        linkedList.addLast("Hi");
        linkedList.addLast("World");

        expect(linkedList.toString()).toMatch(
          "9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> Hi -> World -> null"
        );
      });

      test("Count", () => {
        linkedList.addLast("Hi");
        linkedList.addLast("World");

        expect(linkedList.count).toBe(12);
      });
    });

    describe("Delete First", () => {
      test("Elements", () => {
        linkedList.deleteFirst();

        expect(linkedList.toString()).toMatch("8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> null");
      });

      test("Count", () => {
        linkedList.deleteFirst();

        expect(linkedList.count).toBe(9);
      });
    });

    describe("Delete Last", () => {
      test("Elements", () => {
        linkedList.deleteLast();

        expect(linkedList.toString()).toMatch("9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> null");
      });

      test("Count", () => {
        linkedList.deleteLast();

        expect(linkedList.count).toBe(9);
      });
    });
  });
});
