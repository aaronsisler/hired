
export class PositionWatched {
    $key: string;
    jobId: string;
    subscriptionLevel: string;

    constructor(init?: Partial<PositionWatched>) {
        Object.assign(this, init);
    }
}
