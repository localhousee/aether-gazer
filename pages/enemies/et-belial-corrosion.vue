<template>
  <Enemy
    name="ET <Belial - Corrosion>"
    image="et-belial-corrosion.jpg"
    type="Visbanes"
    risk="I"
    description="A Visbane variant that appears is Yggdrasil ruins, it mutated after absorbing energy from the Gen-zone ruins."
    :intel="[
      'It appears in its full form without the need for the further corrosion to complete its metamorphosis. A foul fluid has muddied its entire body, turning it into a agent of malice that erodes at the great tree.',
      'It can launch even stronger attacks at close range, and is additionally capable of deeper levels of thought.',
      'Covetous of the Imprint Power gathered here, it poses the greatest obstacle to Modifiers attempting to explore the Gen-zone ruins.',
    ]"
    :skills="[
      {
        name: 'Ghost Firefly: War Halberd',
        description:
          'Swings its long halberd to slash forward and then stab upwards at the enemy.',
      },
      {
        name: 'Ghost Firefly: Sweep',
        description:
          'Swings its long halberd to slash diagonally and then seep enemies in a fan-shaped range.',
      },
    ]"
  />
</template>
