import { WishSystem } from "game-algorithm";
import { defineStore } from "pinia";
import { createState, User } from "./State";
import { random } from "game-random";

let Wish = new WishSystem({
    star: [
        {
            name: "四星",
            rate: 0.072,
            pitch: 10,
        },
        {
            name: "五星",
            rate: 0.01,
            pitch: 90,
        },
    ],
    voidGift: {
        name: "三星",
    },
});
const _random = (userID: string, count: number) => {
    return random(0, 1, true, userID + count);
};
Wish.random = _random;

const replaceArray = <T>(arr: T[], arr2: T[]) => {
    arr.splice(0, arr.length, ...arr2);
};
export const useWishStore = defineStore({
    id: "Wish",

    state: createState,
    actions: {
        resetWish() {
            this.wishRecords = [];
            this.wish(1000);
        },
        wish(time: number) {
            [...Array(time).keys()].map((i) => {
                const gift = Wish.wish(this.userID);
                this.wishRecords.push(gift);
            });
            this.getDataFromWishSystem();
        },
        getDataFromWishSystem() {
            const user = (Wish as any).UserPool[this.userID] as User;

            replaceArray(this.pitchArray, user.pitchArray);

            this.wishCount = user.wishRecords.length;
        },
    },
});
