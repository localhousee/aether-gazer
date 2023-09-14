<template>
  <Enemy
    name="ET <Belial - Eerie>"
    image="et-belial-eerie.jpg"
    type="Visbanes"
    risk="I"
    description="A Visbane variant that appears is Shinou ruins, it mutated after absorbing energy from the Gen-zone ruins."
    :intel="[
      'It appears in its full form without the need for the further corrosion to complete its metamorphosis. Stained scarlet and covered in scars, it wanders in the specter of wars with no hope of escape.',
      'It can launch even stronger attacks at close range, and is additionally capable of deeper levels of thought.',
      'Covetous of the imprint Power gathered here, it poses the greatest obstacle to Modifiers attempting to explore the Gen-zone ruins.',
    ]"
    :skills="[
      {
        name: 'Slugger: Dare',
        description: 'Stabs at the enemy ahead with its pike.',
      },
      {
        name: 'Slugger: Break',
        description:
          'Stabs twice in quick succession with its pike at the enemy.',
      },
      {
        name: 'Slugger: Shift',
        description:
          'Launches a series of variegated attacks with its pike at the enemy.',
      },
    ]"
  />
</template>
