import Claymore from "../../Type/Claymore";
import BaseStat from "../../../BaseStats/BaseStat";
import AscensionsIterator from "../../../BaseStats/AscensionsIterator";
import {WeaponBaseMainStat} from "../../WeaponBaseMainStat";
import {StatType} from "../../../BaseStats/StatType";
import Character from "../../../Characters/Character";
import {WeaponPassiveValue} from "../../WeaponPassiveValue";

export default class WolfGravestoneWeapon extends Claymore {
  baseATK: BaseStat = new BaseStat(new AscensionsIterator([
    [46, 122],
    [153, 235],
    [266, 308],
    [340, 382],
    [414, 457],
    [488, 532],
    [563, 608],
  ]));
  mainStat: WeaponBaseMainStat = new WeaponBaseMainStat(StatType.PercentATK, new AscensionsIterator([
    [10.8, 19.1],
    [19.1, 27.8],
    [27.1, 32.2],
    [32.2, 36.5],
    [36.5, 40.9],
    [40.9, 45.3],
    [45.3, 49.6],
  ]));

  private permanentATKPrefix = new WeaponPassiveValue(this, 20, 5);

  override applyPermanentPassives(character: Character): this {
    character.calculatorStats.ATK.addPrefix(this.permanentATKPrefix.valueAtRefinement);
    return super.applyPermanentPassives(character);
  }

  override removePermanentPassives(character: Character): this {
    character.calculatorStats.ATK.removePrefix(this.permanentATKPrefix.valueAtRefinement);
    return super.removePermanentPassives(character);
  }

  override applyPassives(character: Character): this {
    return super.applyPassives(character);
  }

  override removePassives(character: Character): this {
    return super.removePassives(character);
  }
}