import { Flock, Vector, Emitter } from "game-algorithm";
import { useStore } from "./index";
import { Application, Graphics } from "pixi.js";
import { createRect } from "../../../utils/Pixi/create";
export const createGame = (
    element: HTMLElement,
    store: ReturnType<typeof useStore>
) => {
    const { width, height } = getComputedStyle(element);
    const app = new Application({
        antialias: true, // default: false 反锯齿
        backgroundAlpha: 1, // default: false 透明度
        resolution: 1, // default: 1 分辨率
        height: parseInt(height),
        width: parseInt(width),
    });
    element.appendChild(app.view);

    // 生成鸟群
    const { flock, boids } = createBoids(store);
    flock.flock.forEach((i) => {
        i.sandboxDimensions = new Vector(parseInt(width), parseInt(height));
    });
    // 生成信息素
    const foodBody = createEmitter(store, flock, app);
    app.stage.addChild(foodBody, ...boids);

    // 添加每帧循环
    createUpdater(app, flock, boids);
    return () => {
        element.removeChild(app.view);
        app.destroy();
    };
};

function createUpdater(app: Application, flock: Flock, boids: Graphics[]) {
    app.ticker.add(() => {
        flock.update();
        flock.flock.forEach((i, index) => {
            const { x, y } = i.position;
            const rect = boids[index];
            rect.position.set(x, y);

            // 展示鸟的不同的属性
            let color = 0x0000ff;
            switch (i.majorInfluence) {
                case "cohesion":
                    color = 0xff0000;
                    break;

                case "claustrophobia":
                    color = 0x00ff00;
                    break;
            }
            changeColor(rect, color);
        });
    });
}

function createEmitter(
    store: ReturnType<typeof useStore>,
    flock: Flock,
    app: Application
) {
    const food = new Emitter(
        () => new Vector(400, 400),
        4000,
        store.emitterRadius,
        "log",
        false
    );
    flock.addEmitter(food);
    const foodBody = createRect(100, 100, 0xff0000, 2);

    // 让信息素跟随鼠标
    app.view.addEventListener("mousemove", ({ offsetX: x, offsetY: y }) => {
        if (Math.random() > 0.7) {
            food.moveTo(x, y);
            foodBody.position.set(x, y);
        }
    });
    app.view.addEventListener("click", () => {
        food.repel = !food.repel;
        console.log(food.repel);
        changeColor(foodBody, food.repel ? 0x0000ff : 0xff0000, 2);
    });
    return foodBody;
}

function createBoids(store: ReturnType<typeof useStore>) {
    const flock = new Flock();
    const boids = [...Array(store.boidNumber).keys()].map((i) => {
        flock.addRandomBoid(new Vector(20, 20));
        return createRect();
    });
    return { flock, boids };
}

function changeColor(rect: Graphics, color: number, scale = 1) {
    rect.beginFill(color);
    rect.drawRect(0, 0, 10 * scale, 10 * scale);
    rect.endFill();
}
