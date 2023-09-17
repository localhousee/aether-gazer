<template>
  <Enemy
    name="AGI Mecha A-01 <N.O.L.A.N>"
    image="agi-mecha-a-01-n-o-l-a-n.jpg"
    type="AGI Mecha"
    risk="I"
    description="Made by Aether Gazer, the main function of these AGI Mechas is hospitality. Equipped with internal heating and cooling units, they can often hot and cold beverage to guests and staff."
    :intel="[
      `A type of AGI Mecha utilized by Aether Gazer. Designed by Ookuninushi, who also provided a portion of the technology, and build by the Cryptic, it's one of the Aether Gazer's proudest works and boasts even more advanced capabilities than the other AGI Mechas on the market.`,
      'To allow them to remain steady while handing drinks or food to guests, they were designed to move by hovering.',
      'These AGI Mecha were made extremely dangerous by Bane Energy corrosion.',
    ]"
    :skills="[
      {
        name: 'Social Distancing',
        description:
          'Raises its mechanical arm and launches an electric arc forward at the distant enemy.',
      },
      {
        name: 'Full Devices',
        description:
          'Raises its mechanical arm and cleanly cuts through obstacles in a circle around it.',
      },
    ]"
  />
</template>
