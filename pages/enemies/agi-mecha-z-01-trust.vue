<template>
  <Enemy
    name="AGI Mecha Z-01 <Trust>"
    image="agi-mecha-z-01-trust.jpg"
    type="AGI Mecha"
    risk="I"
    description="With an exterior as solid as an iron barrel, it's a practically unstoppable on the battlefield."
    :intel="[
      'Combat performance tests have shown that its compatibility, armor resistance, and firepower output are all vastly superior to other AGI Mechas of the same class. Though its exterior is covered with sturdy, nearly seamless armor, the propulsion system on its back allows it to maneuver with astonishing speed, accompanied by only a monetary functional overload.',
      'This state-of-the-art technology requires significantly reduced material costs and production time, making the Z-01 Trust war AGI Mecha ready for mass production.',
      `Even a formidable AGI Mecha like this one has a weak spot - Just by attacking one critical point, Z-01's steel shell can be broken with ease, however...tho this day, no one has successfully attempted this.`,
    ]"
    :skills="[
      {
        name: 'Electric Jolt',
        description:
          'Swings a mechanical arm fully charged with electricity at an enemy.',
      },
      {
        name: 'Electric Rush',
        description:
          'Expands its shield and rushes at an enemy before swings a charged mechanical arm at them in a sweeping attack.',
      },
      {
        name: 'Power of Trust',
        description: 'Delivers a close-range sweeping attack to an enemy.',
      },
    ]"
  />
</template>
