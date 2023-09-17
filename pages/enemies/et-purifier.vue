<template>
  <Enemy
    name="ET <Purifier>"
    image="et-purifier.jpg"
    type="Visbanes"
    risk="II"
    description="A special Encroacher Type Visbane and a failed product of the Soul Replacement Plan, it was formed when its soul and memories were corrupted by Turing's Bane Energy after being rejected by the coordinates."
    :intel="[
      'Capable of refining pure Bane Energy into a diving force for itself, its high purity level is also evidenced by its color.',
      'It attacks using dual blades and its abilities include (but are not limited to) flickering between locations and changing energy forms, making it rather different from previous Encroacher Types.',
      'Intelligent enough to understand commands, Turing has arranged for this Visbane to assist Otis in his ongoing experiments to find coordinates.',
    ]"
    :skills="[
      {
        name: 'Ultimate Exille',
        description:
          'Swings its dual blade, dealing two consecutive blows to the enemy.',
      },
      {
        name: 'Extradimensional Shift',
        description:
          'Flickers over near the enemy and deals two consecutive attacks.',
      },
      {
        name: 'Purifying Propulsion',
        description:
          'Rushes toward the target, dealing damage to enemies in its path.',
      },
      {
        name: 'Deathly Silence',
        description: `Coalesces high-purity energy into an orb and fires it at the enemy, where it explodes and forms a deceleration field the restricts enemies' movements.`,
      },
    ]"
  />
</template>
