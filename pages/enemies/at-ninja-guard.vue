<template>
  <Enemy
    name="AT <Ninja Guard>"
    image="at-ninja-guard.jpg"
    type="Visbanes"
    risk="I"
    description="A humanoid Visbane born of Orochi's binding experiments, it represents an early attempt at this technology."
    :intel="[
      'Originally a samurai cultivated by the Miyahebi family who voluntarily underwent this unstable Visbane transformation procedure.',
      'Possessing only the most basic capability for thought, its only policy is to eliminate all enemies of the Miyahebi family.',
      `Uses a pain as a weapon, and the poison and explosive it's outfitted with make it a tricky adversary.`,
    ]"
    :skills="[
      {
        name: 'Soaring Shuriken',
        description:
          'Leap into the air and fling two shurikens at an enemy. If a shuriken does not strike its target, it will fall to the ground for a time before self-destructing, dealing damage to enemies within a small area.',
      },
      {
        name: 'Windbreaker Shuriken',
        description: 'Fling three shurikens at an enemy ahead.',
      },
    ]"
  />
</template>
