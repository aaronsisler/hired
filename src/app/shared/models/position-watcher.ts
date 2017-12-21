import { PositionWatched } from "shared/models/position-watched";


export class PositionWatcher {
    positionsWatched: PositionWatched[] = [];

    constructor(private positionsWatchedMap: { [positionId: string]: PositionWatched }) {
        this.positionsWatchedMap = positionsWatchedMap || {};
        for (let positionId in positionsWatchedMap) {
            let positionWatched = positionsWatchedMap[positionId];
            this.positionsWatched.push(new PositionWatched({ ...positionWatched, $key: positionId }));
        }
    }
}