<template>
  <Enemy
    name="PT <Aphixbane>"
    image="pt-aphixbane.jpg"
    type="Visbanes"
    risk="II"
    description="A Primal Type Visbane formed from the combination of a Formisane and Wingbane."
    :intel="[
      'Its appetite for destruction and methods of attack are even stronger.',
      'Possessing flying abilities ever stronger than that if a Wingbane as well as high mobility, it will use its powerful claws to destroy everything within its sights.',
      `While they are not many Aphixbanes, together they are capable of tearing open channels through Gaea's layers.`,
    ]"
    :skills="[
      {
        name: 'Bane Shadow Proliferation',
        description:
          'The Aphixbane swiftly rotates, deal damage to surrounding enemies before summoning two Formisanes and Wingbanes nearby.',
      },
      {
        name: 'High-Frequency Sonic Boom',
        description:
          'The Aphixbane unleashes a high-frequency sonic boom at an enemy, after which it slashes forward with its claws across a small area.',
      },
      {
        name: 'Leaping Chase',
        description: `The Aphixbane leaps up high then clashes down at an enemy's position, dealing a certain amount of AoE damage.`,
      },
    ]"
  />
</template>
