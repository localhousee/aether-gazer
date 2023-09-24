<template>
  <Enemy
    name="AGI Mecha A-03 <Popper>"
    image="agi-mecha-a-03-popper.jpg"
    type="AGI Mecha"
    risk="I"
    description="Flexible and fleet-footed, it comes equipped with a weaponized laser device."
    :intel="[
      `Even after launch of the A-06 <Glory> AGI Mecha, the A-03 Popper's low energy consumption and high precision keeps it in production.`,
      'Owing to the division of production tasks, a portion of the Popper model AGI Mechas are equipped with laser weapons for use in regular caretaking of the factory interior.',
      'They often leisurely wander around the factory floor, surveying the work being carried out in each workshop.',
    ]"
    :skills="[
      {
        name: 'Corrosive Artillery Strike',
        description: `Charges up a laser cannon and fires at enemies ahead, generating continuous damage near the laser's impact point.`,
      },
      {
        name: 'Bullet Storm',
        description: 'Rapidly fire bullets at an enemies.',
      },
    ]"
  />
</template>
