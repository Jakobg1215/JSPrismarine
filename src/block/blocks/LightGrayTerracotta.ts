import WhiteTerracotta, { TerracottaColorType } from './WhiteTerracotta';

export default class LightGrayTerracotta extends WhiteTerracotta {
    constructor() {
        super('minecraft:light_gray_concrete', TerracottaColorType.LightGray);
    }
}