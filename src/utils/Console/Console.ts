import format from "quick-format-unescaped";
import { ConsoleRecord, ConsoleType } from "./ConsoleType";

type _console = Console;
/** 全局状态下真的 Console */
const $Console: _console | CONSOLE =
    "console" in window.console
        ? (window.console as any).console
        : window.console;

const now = () => new Date().getTime();

export interface Node extends ConsoleRecord {
    // data?: ConsoleRecord;
    isLeaf?: boolean;
    children?: Node[];
}
export const historyToTree = (options: {
    cursor: 0;
    total: Node[];
    last?: Node[];
}) => {
    const { total, last = [] } = options;
    while (total.length > options.cursor) {
        const cur = total[options.cursor];
        // cur.data = { ...cur };
        options.cursor++;
        switch (ConsoleType[cur.type]) {
            case "group":
                const children = historyToTree(options);
                const item = { ...cur, children, isLeaf: false };
                last.push(item);
                continue;
            case "groupEnd":
                return last;
            default:
                last.push({ ...cur, isLeaf: true });
        }
    }
    return last;
};

export class CONSOLE {
    times: {
        [key: string]: number;
    } = {};
    history: ConsoleRecord[] = [];
    console?: _console;
    /** 取代全局 console */
    wrapGlobal() {
        if ("console" in window.console) {
            throw "console 已经被代理了";
        } else {
            this.history = [];
            this.console = window.console;
            (window as any).console = this;
            $Console.group(new Date().toLocaleString() + " Console 代理组");
        }
    }
    /** 恢复全局 console */
    unwrapGlobal() {
        if ("console" in window.console) {
            if (this.console) (window as any).console = this.console;
            $Console.groupEnd();
            this.console = undefined;
        } else {
            throw "释放全局 console 失败";
        }
    }
    /** 计时组合 */
    timeGroup(label: string) {
        this.time(label);
        this.group(label);
    }
    timeGroupEnd(label: string) {
        this.timeEnd(label);
        this.groupEnd();
    }
    private record(history: Omit<ConsoleRecord, "id">) {
        this.history.push({ id: this.history.length, ...history });
    }
    clear() {
        this.history = [];
        console.warn("清空控制台");
    }
    log(...args: any[]) {
        const record: Omit<ConsoleRecord, "id"> = {
            type: ConsoleType.log,
            args,
        };
        this.record(record);
        $Console.log(...args);
    }
    info(...args: any[]) {
        this.record({
            type: ConsoleType.info,
            args,
        });
        $Console.info(...args);
    }
    success(...args: any[]) {
        this.record({
            type: ConsoleType.success,
            args,
        });
        $Console.info(...args);
    }
    warn(...args: any[]) {
        this.record({
            type: ConsoleType.warn,
            args,
        });
        $Console.warn(...args);
    }
    error(...args: any[]) {
        this.record({
            type: ConsoleType.error,
            args,
        });
        $Console.error(...args);
    }
    table(obj: Object) {
        this.record({
            type: ConsoleType.table,
            args: [obj],
        });
        $Console.table(obj);
    }
    time(label: string) {
        this.times[label] = now();
        $Console.time(label);
    }
    timeEnd(label: string) {
        $Console.timeEnd(label);
        const time = this.times[label];
        delete this.times[label];
        if (!time) {
            throw new Error("No such label: " + label);
        }

        const duration = now() - time;
        const info = label + ": " + duration + "ms";
        this.record({
            type: ConsoleType.time,
            args: [info],
        });
    }
    group(label: string) {
        this.record({
            type: ConsoleType.group,
            args: [label],
        });
        $Console.group(label);
    }
    groupEnd() {
        for (let index = this.history.length - 1; index >= 0; index--) {
            const lastGroup = this.history[index];
            if (lastGroup.type === ConsoleType.group) {
                this.record({
                    type: ConsoleType.groupEnd,
                    args: [],
                });
                $Console.groupEnd();
                break;
            }
        }
    }

    trace() {
        const err = new Error();
        err.name = "Trace";
        this.record({
            type: ConsoleType.trace,
            args: [err.stack],
        });
        $Console.error(err.stack);
    }
    dir(obj: any) {
        this.record({
            type: ConsoleType.dir,
            args: [obj],
        });
        $Console.dir(obj);
    }
    assert(expression: boolean, ...args: any) {
        if (!expression) {
            const info = format.apply(null, args);
            this.record({
                type: ConsoleType.assert,
                args: [info],
            });
            $Console.assert(expression, ...args);
        }
    }
}
