<template>
  <Enemy
    name="PLMT <Metabane - Hysterism>"
    image="plmt-metabane-hysterism-.jpg"
    type="Visbanes"
    risk="II"
    description="A Polymerized Type variant enveloped in filth and decay, it releases a intense, foul form of Bane Energy that erodes its enemy's willpower."
    :intel="[
      'A Visbane variant that appears in Yggdrasill ruins, energy from the Gen-zone ruins gave rise to this mutation.',
      `Formed by a certain number of Encroacher Types from the ruins, it possesses absolute authority over the Gen-zone's Encroacher Types, A foul fluid has muddied its entire body, turning it into an agent of malice that erodes at the great tree.`,
      'Able to adeptly utilize energy from the ruins, it also possesses an advanced capacity for thought, making it an enormous threat. Covetous of the item Imprint Power gathered here, it poses the greatest obstacle to Modifiers attempting to explore the Gen-zone ruins.',
    ]"
    :skills="[
      {
        name: 'Corrosive Missile',
        description:
          'Fires six missiles in a forward fan-shaped range, dealing damage to the enemies in range.',
      },
      {
        name: 'Stab of Terror',
        description: 'Ferociously stabs forward at the distant enemy.',
      },
      {
        name: 'Swarm of Filth',
        description:
          'Unfurls its wings and pierces the ground under its feet, dealing impact damage. When its HP is low, its additionally inflicts Trauma on enemies hit for a certain duration. If no enemy is hit, it summons minions from the swamp to attack enemies.',
      },
    ]"
  />
</template>
