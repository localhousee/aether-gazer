<template>
  <Enemy
    name="ET <Belial - Craze>"
    image="et-belial-craze.jpg"
    type="Visbanes"
    risk="I"
    description="A Visbane variant that appears is Nile ruins, it mutated after absorbing energy from the Gen-zone ruins."
    :intel="[
      'It appears in its full form without the need for the further corrosion to complete its metamorphosis. Having fully assumed its bestial form after breaking free from its bonds, it reveals its sharp claws and fangs as it stirs in the sand and dust.',
      'It can launch even stronger attacks at close range, and is additionally capable of deeper levels of thought.',
      'Covetous of the imprint Power gathered here, it poses the greatest obstacle to Modifiers attempting to explore the Gen-zone ruins.',
    ]"
    :skills="[
      {
        name: 'Frenzied Strike',
        description: 'Sweeps the enemies ahead within a circular range twice.',
      },
      {
        name: 'Cutting Claws',
        description:
          'Slashes upwards and the strikes downwards at the enemy ahead with its lance.',
      },
      {
        name: 'Lunge',
        description: 'Leaps up and strikes the enemy ahead.',
      },
    ]"
  />
</template>
