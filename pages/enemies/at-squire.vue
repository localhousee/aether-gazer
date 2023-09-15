<template>
  <Enemy
    name="AT <Squire>"
    image="at-squire.jpg"
    type="Visbanes"
    risk="II"
    description="A humanoid Visbane that appears at the Miyahebi family at home. Beware of its dexterous and agile attacks."
    :intel="[
      'The gradual maturation of this technology allowed it to retain a large portion of its former capacity for thought following the combination.',
      'Once a guard for the Miyahebi family, it continues to loyally protect them even after becoming a Viisbane.',
      'It wields two swords as weapons and never shows mercy to intruders.',
    ]"
    :skills="[
      {
        name: 'Battlefield Sweep',
        description:
          'The Chaplain of War swings its weapons in a cross-cut attack, sweeping away obstacles on the battlefield.',
      },
      {
        name: 'Ambush at Dark',
        description:
          'The Chaplain of War crouches in the dark, waiting for its opportunity to strike. Once an enemy appears, it moves in front of them in the blink of an eye and launches two attacks on them on rapid succession.',
      },
      {
        name: 'Brand of Loyal Courage',
        description:
          'The Chaplain of War gathers power, then unleashes two overlapping sword blasts forward, deal damage even to distant enemies.',
      },
    ]"
  />
</template>
