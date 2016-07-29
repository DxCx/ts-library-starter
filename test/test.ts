"use strict";

import { Example } from "..";
import { expect, should } from "chai";

// Init framework.
should();

describe("Example", () => {
    it("Should be pass sanity", (done) => {
        expect(Example).to.be.a("function");
        done();
    });
});
