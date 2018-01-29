
export class PositionWatched {
    $key: string;
    positionId: string;
    subscriptionLevel: string;

    constructor(init?: Partial<PositionWatched>) {
        Object.assign(this, init);
    }
}
