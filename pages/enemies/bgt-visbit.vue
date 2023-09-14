<template>
  <Enemy
    name="BGT <Visbit>"
    image="bgt-visbit.jpg"
    type="Visbanes"
    risk="I"
    description="Diminutive Visbanes with bug-like characteristics."
    :intel="[
      'Individually, their destructive power is negligible, but there are vast numbers of them and they usually act in swarms.',
      'They are the main force that gnaws at and sabotages the Source Layer data. Individuals that reach maximum activity will seek the nearest target to self-destruct by.',
      'Unable to open channles to the Surface Layer on their own, they usually follow naturally-occuring fissures or channels opened by high-level Visbanes to reach the Surface Layer.',
    ]"
    :skills="[
      {
        name: 'Swoop',
        description:
          'Swoops a short distance forward and attacks an enemy ahead.',
      },
      {
        name: 'Self-Destruct',
        description: 'Moves next to a nearby enemy self-destructs.',
      },
    ]"
  />
</template>
