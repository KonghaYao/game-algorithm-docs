import { WishSystem } from "game-algorithm";
import { User } from "game-algorithm/src/Wish";
import { ref } from "vue";

export type Gift = ReturnType<typeof WishSystem.prototype.wish>;

export const createState = () => {
    return {
        wishRecords: ref<Gift[]>([]),
        pitchArray: ref<User["pitchArray"]>([]),
        seed: undefined as unknown,
        userID: "KonghaYao",
        wishCount: 0,
    };
};
