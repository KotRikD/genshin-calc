import Character from "../../Character";
import {StatType} from "../../../BaseStats/StatType";

export default abstract class Stat {
  constructor(
    protected character: Character,
  ) {
  }

  /**
   * Calc this stat value
   * @return {number} - calculated value
   * */
  public abstract calc(): number;

  /**
   * Clear this stat
   * @return {Stat} - this
   * */
  public clear(): this {
    return this;
  };

  /**
   * Get value and clear all prefixes/affixes/additional
   * @return {Stat} - this
   * */
  public get value() {
    const result =  this.calc();
    this.clear();
    return result;
  }

  /**
   * Get weapon value bonus by stat
   * @param {StatType} statType - stat type
   * @return {number} - value
   * */
  protected getWeaponValue(statType: StatType) {
    const {weaponManager} = this.character;

    return weaponManager.weapon?.mainStat.isType(statType)
      ? weaponManager.weapon?.mainStat.value
      :0;
  }

  /**
   * Get artifacts value bonus by stat
   * @param {StatType} statType - stat type
   * @return {number} - value
   * */
  protected getArtifactsValue(statType: StatType) {
    const {artifactsManager} = this.character;

    return artifactsManager.getStatSumByType(statType);
  }
}