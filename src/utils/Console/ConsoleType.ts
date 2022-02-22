export enum ConsoleType {
    log,
    table,
    info,
    warn,
    success,
    error,
    time,
    group,
    groupEnd,
    trace,
    dir,
    assert,
}
export interface ConsoleRecord {
    id: string | number;
    type: ConsoleType;
    args: any[];
}
