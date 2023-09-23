<template>
  <Enemy
    name="COI <Security>"
    image="coi-security.jpg"
    type="Humanoid"
    risk="I"
    description="Security guards wearing light combat fatigues."
    :intel="[
      'Low-level staff employed by Iron Security, some were selected directly from Children of Iron while others were recruited after the company founded.',
      'Equipped with ranged firearms to keep enemies at bay, their specific proficiencies are unknown. It is also entirely possible that they will abandon their armor and flee from combat.',
      `While their general combat ability isn't much to speak of, the more outstanding among them will be promoted to squad leaders.`,
    ]"
    :skills="[
      {
        name: 'Ranged Snipe',
        description: 'Crouches down and take a snipe at an enemy ahead.',
      },
      {
        name: 'Gunshot',
        description: 'Draws a gun and fires at an enemy ahead',
      },
      {
        name: 'Rough Thwack',
        description: 'Roughly swings a rifle at an enemy.',
      },
    ]"
  />
</template>
