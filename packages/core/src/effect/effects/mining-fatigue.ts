import { Color, EffectType } from "@serenityjs/protocol";

import { Effect } from "./effect";
import { Entity } from "../../entity";

class MiningFatigueEffect extends Effect {
  public static readonly type: EffectType = EffectType.MiningFatigue;
  public color: Color = new Color(67, 21, 5, 0);

  public onAdd(entity: Entity): void {
    // Only players can mine blocks, so...
    if (!entity.isPlayer()) return;
    entity.miningSpeed *= 0.3 ** (this.amplifier + 1);
  }

  public onRemove(entity: Entity): void {
    // Only players can mine blocks, so...
    if (!entity.isPlayer()) return;
    entity.miningSpeed /= 0.3 ** (this.amplifier + 1);
  }
}

export { MiningFatigueEffect };
