"use strict";

import { Example } from "./Example";
import { expect, should } from "chai";

// Init framework.
should();

describe("Example", () => {
    it("Should be pass sanity", (done) => {
        expect(Example).to.be.a("function");
        done();
    });

    it("Should be able to create new instance", (done) => {
        expect(new Example()).to.be.a("object");
        done();
    });
});
