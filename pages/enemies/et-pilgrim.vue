<template>
  <Enemy
    name="ET <Pilgrim>"
    image="et-pilgrim.jpg"
    type="Visbanes"
    risk="II"
    description="A special Encroacher Type Visbane and a failed product of the Soul Replacement Plan, it was formed when its soul and memories were corrupted by Turing's Bane Energy after being rejected by the coordinates."
    :intel="[
      'Capable of refining pure Bane Energy into a diving force for itself, its high purity level is also evidenced by its color.',
      'It uses telekinesis to attack enemies from a distance and its abilities include (but are not limited to) invisibility and teleportation, making it rather different from previous Encroacher Types.',
      'Intelligent enough to understand commands, Turing has arranged for this Visbane to assist Otis in his ongoing experiments to find coordinates.',
    ]"
    :skills="[
      {
        name: 'Telekinetic Snipe',
        description:
          'Summons three balls of energy and fires them at the distant enemy.',
      },
      {
        name: 'Seismic Wave',
        description: `Summons a circular shockwave from the under enemy's feet that inflicts Knockup on enemies in range.`,
      },
      {
        name: 'Sensory Confinement',
        description: `Summons a high-powered matrix from the under enemy's feet, which rapidly expands to form a deceleration field that restricts enemies' movements.`,
      },
      {
        name: 'Energy-Amassing Star',
        description: `Flickers over to the enemy's side and forms two energy orbs in front, which explode and confuse enemies hit in the blast.`,
      },
    ]"
  />
</template>
