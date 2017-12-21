
export class PositionWatched {
    $key: string;
    subscriptionLevel: string;

    constructor(init?: Partial<PositionWatched>) {
        Object.assign(this, init);
    }
}