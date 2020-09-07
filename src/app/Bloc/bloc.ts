import { Observable } from "rxjs";

export declare class Bloc {
    mapStateFromEvent($event: BlocEvent): Observable<BlocState> | BlocState;
    initialize(): void;
    dispose(): void;
}

export interface BlocEvent {
  getEventData<T>();
}

export interface BlocState {
  getStateContext<T>();
}