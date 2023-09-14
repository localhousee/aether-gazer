<template>
  <Enemy
    name="ET <Andras - Alienation>"
    image="et-andras-alienation.jpg"
    type="Visbanes"
    risk="I"
    description="A Visbane variant that appears is Asterism ruins, it mutated after absorbing energy from the Gen-zone ruins."
    :intel="[
      'It appears in its full form without the need for the further corrosion to complete its metamorphosis. A reflection of the dark side of the stars and draped in a tattered veil, it has come to be seen as a pathfinder of the silent void.',
      'It can launch even stronger attacks at close range, and is additionally capable of deeper levels of thought.',
      'Covetous of the imprint Power gathered here, it poses the greatest obstacle to Modifiers attempting to explore the Gen-zone ruins.',
    ]"
    :skills="[
      {
        name: 'Astral Burst',
        description:
          'Summons a ball of energy from under the enemy\'s feet, which explodes and deals damage.',
      },
      {
        name: 'Starlight',
        description: 'Summons a powerful ray to attack the enemy ahead',
      },
      {
        name: 'Falling Star',
        description: 'Strikes the nearby enemies with its staff.',
      },
    ]"
  />
</template>
