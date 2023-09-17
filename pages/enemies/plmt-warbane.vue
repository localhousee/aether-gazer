<template>
  <Enemy
    name="PLMT <Warbane>"
    image="plmt-warbane.jpg"
    type="Visbanes"
    risk="II"
    description="A powerful enemy that uses a large sword and shield for both offense and defense."
    :intel="[
      'A individual born from the aggregation of a certain number of corrupted species, only a limited number have ever been observed.',
      'It uses a large sword and shield to execute powerful offensive and defensive measures and is capable of brief moments of simple tactical consideration.',
      'Classified as a Polymerized Visbane due to its relatively high danger factor, extra attention should be paid when fighting it.',
    ]"
    :skills="[
      {
        name: 'Coerce',
        description:
          'The Warbane charges up its power, then thrusts its heavy sword forward in a mid-range stabbing attack.',
      },
      {
        name: 'Patrol',
        description:
          'The Warbane flickers over to the enemy and launches a powerful attack while leaving a marker lightsaber at its original position that can be returned at any time.',
      },
      {
        name: 'Judgement',
        description:
          'Once there are three marker lightsabers on the battlefield, the Warbane will summon two more, then launch all five at the enemies, dealing damage even to distant enemies.',
      },
    ]"
  />
</template>
