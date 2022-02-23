import { WishSystem } from "game-algorithm";
import { ref } from "vue";
export type User = Parameters<typeof WishSystem.prototype.CheckPitch>[0];
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
