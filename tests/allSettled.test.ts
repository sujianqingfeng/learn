import { allSettle } from "../allSettled"

test("test allsettle", () => {
	const promises = [Promise.resolve("resolve"), Promise.reject("reject")]

	return expect(allSettle(promises)).resolves.toEqual([
		{ status: "fulfilled", value: "resolve" },
		{ status: "rejected", value: "reject" },
	])
})
