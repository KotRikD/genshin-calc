import Artifact from "../Artifact";
import {ArtifactAllStats, ArtifactStatType} from "../ArtifactStatType";
import {ArtifactType} from "../ArtifactType";

export default class ArtifactPlume extends Artifact {
  protected readonly type: ArtifactType = ArtifactType.Plume;
  protected readonly allowedMainStats: ArtifactStatType[] = [ArtifactStatType.FlatATK];
}