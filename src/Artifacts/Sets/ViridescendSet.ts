import ArtifactSet from "../ArtifactSet";
import Character from "../../Characters/Character";

export default class ViridescendSet extends ArtifactSet {
  computeTwoPieceBonuses(character: Character): void {
    console.log("execute Viridescend 2");
    character.calculatorStats.anemoDmgBonus.addAdditionalValue(15);
  }

  computeFourPieceBonuses(character: Character): void {
    console.log("execute Viridescend 4");
  }

  removeTwoSetBonuses(character: Character): void {
    console.log("remove Viridescend 2");
    character.calculatorStats.anemoDmgBonus.removeAdditionalValue(15);
  }

  removeFourSetBonuses(character: Character): void {
    console.log("remove Viridescend 4");
  }
}