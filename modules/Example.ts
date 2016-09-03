
export class Example {
    private covered = false;
    /* Some code in here :) */

    public coverageTest() {
        /* Should be uncovered. */
        this.covered = true;
    }
}
