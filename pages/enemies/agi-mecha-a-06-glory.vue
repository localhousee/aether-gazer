<template>
  <Enemy
    name="AGI Mecha A-06 <Glory>"
    image="agi-mecha-a-06-glory.jpg"
    type="AGI Mecha"
    risk="I"
    description="The star of the production line, its solid body is outfitted with a variety of tools."
    :intel="[
      'The Glory AGI Mecha comes loaded with a variety of equipment used in industrial production.Its sturdy form allows it to undertake all sort pf onerous tasks.',
      'Its relatively strong torso and limbs allow it to carry out grueling production work.',
      'They come equipped with different arms according to their specific model, such as cutting saws or electric drills...',
    ]"
    :skills="[
      {
        name: 'Chainsaw Sweep',
        description:
          'Activates its chainsaw module and delivers a sweeping attack to an enemy.',
      },
      {
        name: 'Drill Spark',
        description: 'Activates its drill module and jabs at an enemy.',
      },
      {
        name: 'Glorious Mission',
        description:
          'Activates its both modules at once and rams into an enemy.',
      },
    ]"
  />
</template>
