<template>
  <Enemy
    name="Top Maid <Mintha>"
    image="top-maid-mintha.jpg"
    type="Humannoid"
    risk="II"
    description="A puppet that is the pride and joy of Hades. Driven by Divine Power, she is possesses a certain level of sentience and can thus operate even when Hades is not with her."
    :intel="[
      `Under the operation of Hades, the puppet's powerful armaments serve as fearsome weapons during combat. On a average day, however, the puppet serves as a maid for the Society of Muses, where she takes care of members' everyday needs.`,
      'In their free times, the two maids wander through the private library of the Society of Muse, learning more about humanity.',
      'The cautious and prudent Mintha spares no effort to eliminate any factors that might disrupt the order of the Society and shows no mercy to intruders within it. The only time her gentle side shows is where she faces Oneiroi.',
    ]"
    :skills="[
      {
        name: `Maid's Deterrent`,
        description:
          'Mintha leaps up and slams her fist into the ground, sending a powerful shockwave out in all directions, dealing damage to enemies in range.',
      },
      {
        name: `Maid's Punishment`,
        description:
          'Mintha leaps up and stomps on the ground, then sweeps her fist in a large fan-shaped area ahead, dealing damage to enemies in range.',
      },
      {
        name: 'Deep Clean',
        description:
          'Aided by Leuce, Mintha flies quickly at the target, punching them several times to expel those who disrupt order of the Society of Muses.',
      },
    ]"
  />
</template>
