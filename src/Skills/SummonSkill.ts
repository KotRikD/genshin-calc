import NormalSkill from "./Skill";
import SkillValue from "./SkillValue";

export default abstract class SummonSkill extends NormalSkill {
  public abstract summonUsageFrames: number;
  public abstract summonDurationFrames: number;

  private get usageFrames(): number {
    return this.summonUsageFrames;
  }

  private get durationFrames(): number {
    return this.summonDurationFrames;
  }

  protected abstract usageValue: SkillValue;
  protected abstract summonValue: SkillValue;

  public get usageMVs(): number {
    const dmg = this.usageValue.getValueAtLvl(this.currentLvl);
    return dmg / (this.usageFrames / 60) / 100;
  }

  public get durationMVs(): number {
    const dmg = this.summonValue.getValueAtLvl(this.currentLvl);
    return dmg / (this.durationFrames / 60) / 100;
  }

  public frames = this.usageFrames + this.durationFrames;
}