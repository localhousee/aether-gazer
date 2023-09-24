<template>
  <Enemy
    name="AGI Mecha Z-03 <Battlefield (Broken)>"
    image="agi-mecha-z-03-battlefield-broken.jpg"
    type="AGI Mecha"
    risk="I"
    description="A impaired humanoid AGI Mecha that still retains a strong urge to fight."
    :intel="[
      `It wasn't always smooth sailing in the process of developing of the AGI Mecha Legion. These impaired humanoid AGI Mecha are the failed products of the early stages of the process.`,
      'These impaired humanoid AGI Mechas, through lacking in locomotive power and firepower output, consist of a framework built to the exact design specification of the more advanced B-01. So, estimating it on the basis of that grisly exterior is guaranteed to incur a steep price.',
      `When defeated, it emits a muffled mechanical noise from deep within its body, the meaning of which is known only to its creator, I'm afraid.`,
    ]"
    :skills="[
      {
        name: 'Searing Arc',
        description:
          'Raises one arm and unleashes a powerful arc at a distant enemy.',
      },
      {
        name: 'Charged Collision',
        description: 'Charges up power and rams into a distant enemy.',
      },
    ]"
  />
</template>
