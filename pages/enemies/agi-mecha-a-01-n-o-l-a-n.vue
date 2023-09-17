<script setup lang="ts">
const intel = [
  `A type of AGI Mecha utilized by Aether Gazer. Designed by Ookuninushi, who also provided a portion of the technology, and build by the Cryptic, it's one of the Aether Gazer's proudest works and boasts even more advanced capabilities than the other AGI Mechas on the market.`,
  "Used for the daily maintenance, security, transport, and basic guidance tasks, this type of AGI Mecha has a sturdier-looking design.",
  `Often seen on patrols, transporting supplies or carrying a toolbox, under that adorable exterior lies a power that few originally humans could match. It's no surprise that it was given the name " king of destruction " in the latest AGI Mecha riot at Aether Gazer.`,
];
</script>
<template>
  <Enemy
    name="AGI Mecha A-01 <N.O.L.A.N>"
    image="agi-mecha-a-01-n-o-l-a-n.jpg"
    type="AGI Mecha"
    risk="I"
    description="An AGI Mecha build by Aether Gazer, their cute appearance has made them very popular with the staff. That said, their contributions toward maintaining order in the building also make them a valuable presence there."
    :intel="intel"
    :skills="[
      {
        name: 'Grave Warning',
        description:
          'Raises its front wheels high, then pound into the ground in front of it, deferring disorderly enemies while dealing a certain amount of damage.',
      },
      {
        name: 'Obstruction Clearance',
        description:
          'Dashes ahead, dealing damage to enemies it collides with in its path.',
      },
    ]"
  />
</template>
