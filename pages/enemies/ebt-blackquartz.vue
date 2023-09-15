<template>
  <Enemy
    name="EBT <Blackquartz>"
    image="ebt-blackquartz.jpg"
    type="Visbanes"
    risk="II"
    description="The result of black quartz stone corrupted by a Visbane, its body is covered in hard rocks."
    :intel="[
      'Not possessing any capacity for thought, it has been classified as an Earthbound Visbane.',
      'Its body is incredibly hard and it has the ability to regenerate lost limbs by absorbing rocks.',
      `Its weighty attacks are also quite destructive. It may move slowly, but it's no less dangerous than a Behemoth Visbane.`,
    ]"
    :skills="[
      {
        name: 'Precipice - Collapse',
        description:
          'Blackquartz charges up power then swipes horizontally, dealing damage to enemies at close range.',
      },
      {
        name: 'Precipice - Shake',
        description:
          'Blackquartz charges up power then slam the ground three times, dealing damage to enemies ahead.',
      },
      {
        name: 'Precipice - Cleave',
        description:
          'Blackquartz leaps near an enemy and slam the ground, dealing AoE damage.',
      },
    ]"
  />
</template>
