<template>
  <Enemy
    name="PLMT <Metabane - Graychalk>"
    image="plmt-metabane-graychalk.jpg"
    type="Visbanes"
    risk="II"
    description="A nimble Polymerized Type variant that manipulates torrents of energy to attack enemies from every angle. Quite a tricky opponent."
    :intel="[
      'A Visbane that appears in Olympus ruins, energy from the Ge-zone ruins gave rise to this mutation.',
      `Formed by a certain number of Encroacher Types from the ruins, it possesses absolute authority over the Gen-zone's Encroacher Types, its white bones have turned to gray chalk, symbolizing the end of life and enteral vanishing.`,
      'Able to adeptly utilize energy from the ruins, it also possesses and advance capacity for thought, making it an enormous threat. Covetous of the item imprint Power gathered here, it poses the greatest obstacle for Modifiers attempting to explore the Gen-zone ruins.',
    ]"
    :skills="[
      {
        name: 'Torrent Blast',
        description: `Leaps up and gathers energy, then launches it to smash at the target's feet, after which the energy forms a torrential surge that deals damage to enemies.`,
      },
      {
        name: 'Water Grenade',
        description:
          'Launches a water grenade at the target. If the grenade misses, it will remain on the ground for a while, detonating when an enemy approaches. If no enemy appears nearby within a certain amounts of time, it will detonating and disappear.',
      },
    ]"
  />
</template>
