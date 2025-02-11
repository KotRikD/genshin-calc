import PureStat from "../Types/PureStat";

export default class ElectroResistanceStat extends PureStat {
  calc(): number {
    const {electroResistance} = this.character.baseStats;

    return electroResistance.value + this.additionalValuesSum;
  }
}