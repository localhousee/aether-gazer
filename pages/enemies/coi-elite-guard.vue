<template>
  <Enemy
    name="COI <Elite Guard>"
    image="coi-elite-guard.jpg"
    type="Humanoid"
    risk="I"
    description="Boasts a strong build and wears heavy protective equipment."
    :intel="[
      'Low-level staff employed by Iron Security, some were selected directly from Children of Iron while others were recruited after the company was founded.',
      'Equipped with a sword and shield used at close range to keep enemies at bay, their specific proficiencies are unknown. It is also entirely possible that they will abandon their armor and flee from combat.',
      `While their general combat ability isn't much to speak of, the more outstanding among them will be promoted to squad leaders.`,
    ]"
    :skills="[
      {
        name: 'Shield Charge',
        description: 'Raises their shield and charges into an enemy ahead.',
      },
      {
        name: 'Defensive Stance',
        description:
          'Raises their shield to defend against incoming enemy damage. With its focus concentrated at the front, this move can be easily interrupted from behind.',
      },
      {
        name: 'Pumped Up',
        description: 'Assumes an attacking stance to boost their ATK.',
      },
    ]"
  />
</template>
