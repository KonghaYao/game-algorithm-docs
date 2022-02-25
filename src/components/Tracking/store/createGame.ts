import { Tracking } from "game-algorithm";
import {
    Engine,
    Runner,
    Render,
    World,
    Bodies,
    Events,
    Mouse,
    MouseConstraint,
    Body,
    Vector,
} from "matter-js";
export const createGame = (element: HTMLElement) => {
    const { width, height } = getComputedStyle(element);

    var engine = Engine.create(),
        world = engine.world,
        render = Render.create({
            engine,
            element,
        });
    render.canvas.height = parseInt(height);
    render.canvas.width = parseInt(width);

    const engineRunner = Runner.run(engine);
    Render.run(render);
    engine.gravity.y = 0;

    /**这个是表示鼠标的点 */
    const target = watchingMouse(world, render, engine);

    /** 追踪的球 */
    const balls = createBalls(world, 20);

    const loop = useTracking(balls, target);

    return () => {
        engine.enabled = false;
        Runner.stop(engineRunner);
        Render.stop(render);
        clearInterval(loop);
    };
};
function useTracking(balls: Body[], target: Body) {
    const controllers = balls.map((i) => {
        // ! 主要代码
        return new Tracking<Body>({
            target,
            tracker: i,
            usePID: true,
            getPosition(i) {
                return i.position;
            },

            ctrConfig: {},
            space: 40,
        });
    });
    return setInterval(() => {
        balls.forEach((ball, index) => {
            const { x, y } = controllers[index].update();
            Body.setVelocity(ball, Vector.create(x, y));
        });
    }, 100);
}

function createBalls(world: World, num: number) {
    const balls = [...Array(num).keys()].map((i) => {
        const ball = Bodies.circle(100, 100, 5);
        return ball;
    });
    World.add(world, balls);
    return balls;
}

function watchingMouse(world: World, render: Render, engine: Engine) {
    const target = Bodies.circle(100, 100, 10, { isStatic: true });
    World.add(world, target);
    var mouse = Mouse.create(render.canvas);

    //创建鼠标约束
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
    }); //监听全局鼠标拖拽事件
    Events.on(mouseConstraint, "mousemove", function (event: any) {
        Body.setPosition(target, event.mouse.position);
    });
    return target;
}
