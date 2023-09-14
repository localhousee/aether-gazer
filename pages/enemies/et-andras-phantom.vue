<template>
  <Enemy
    name="ET <Andras - Phantom>"
    image="et-andras-phantom.jpg"
    type="Visbanes"
    risk="I"
    description="A Visbane variant that appears is Olympus ruins, it mutated after absorbing energy from the Gen-zone ruins."
    :intel="[
      'It appears in its full form without the need for the further corrosion to complete its metamorphosis. With bones jutting out from its joint, a shimmering light spills out between this cycle of life and death.',
      'It can launch even stronger attacks at close range, and is additionally capable of deeper levels of thought.',
      'Covetous of the Imprint Power gathered here, it poses the greatest obstacle to Modifiers attempting to explore the Gen-zone ruins.',
    ]"
    :skills="[
      {
        name: 'Spinning Star',
        description:
          'Unleashes a ball of energy forward to attack enemies within range.',
      },
      {
        name: 'Fantasea',
        description: `Summons a tree-shaped ground spike from under the enemy's feet to attack them.`,
      },
    ]"
  />
</template>
