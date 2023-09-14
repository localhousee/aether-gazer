<template>
  <Enemy
    name="ET <Belial - Despair>"
    image="et-belial-despair.jpg"
    type="Visbanes"
    risk="I"
    description="A Visbane variant that appears is Olympus ruins, it mutated after absorbing energy from the Gen-zone ruins."
    :intel="[
      'It appears in its full form without the need for the further corrosion to complete its metamorphosis. With bones jutting out from its joint, a shimmering light spills out between this cycle of life and death.',
      'It can launch even stronger attacks at close range, and is additionally capable of deeper levels of thought.',
      'Covetous of the imprint Power gathered here, it poses the greatest obstacle to Modifiers attempting to explore the Gen-zone ruins.',
    ]"
    :skills="[
      {
        name: 'Desolate Spirit',
        description: 'Stabs at the enemy ahead with its long halberd.',
      },
      {
        name: 'Shattering Wind',
        description:
          'Sweeps and stabs at the enemy ahead with its long halberd.',
      },
      {
        name: 'Soaring Chain',
        description:
          'Stabs at the enemy ahead multiple times with its long halberd in a chain of attacks.',
      },
    ]"
  />
</template>
