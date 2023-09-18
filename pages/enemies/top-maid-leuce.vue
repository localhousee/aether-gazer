<template>
  <Enemy
    name="Top Maid <Leuce>"
    image="top-maid-leuce.jpg"
    type="Humannoid"
    risk="II"
    description="A puppet that is the pride and joy of Hades. Driven by Divine Power, she is possesses a certain level of sentience and can thus operate even when Hades is not with her."
    :intel="[
      `Under the operation of Hades, the puppet's powerful armaments serve as fearsome weapons during combat. On a average day, however, the puppet serves as a maid for the Society of Muses, where she takes care of members' everyday needs.`,
      'In their free times, the two maids wander through the private library of the Society of Muse, learning more about humanity.',
      `The quick and nimble Leuce is unmatched in battle and meticulous in her handling of the Society's affairs, but on the off chances that she encounters a small black creatures, she experiences an emotion the seems odd for a puppet.`,
    ]"
    :skills="[
      {
        name: `Maid's Recom`,
        description:
          'Leuce emits an energy waves that constantly shrink forward herself, detecting all activity within range. Any enemy that touches the waves will suffer damage.',
      },
      {
        name: `Maid's Judgement`,
        description:
          'Leuce leaps up and delivers multiple slashing attacks ahead, then whirls nimby and chop enemies with her brutal blade.',
      },
      {
        name: `True Hospitality`,
        description:
          'Aided by Mintha, Leuce flies quickly at the target, delivering a slashing attack and flinging a spinning blade, dealing damage to the enemy.',
      },
    ]"
  />
</template>
