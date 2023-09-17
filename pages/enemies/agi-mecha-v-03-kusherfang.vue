<template>
  <Enemy
    name="AGI Mecha V-03 <Kusherfang>"
    image="agi-mecha-v-03-kusherfang.jpg"
    type="AGI Mecha"
    risk="III"
    description="A massive half-human, half-horse AGI Mecha weapon."
    :intel="[
      'A being unsurpassed in the principled of solo combat',
      'This weapon was produced by combining state-of-the-art technology with all of the advanced resources at the disposal of Spealght Industries.',
      'Prior become a world-destroying weapon, Kusherfang was actually an unparalleled work of art in the eyes of its creators.',
    ]"
    :skills="[
      {
        name: 'Soaring Stab',
        description:
          'Kursherfang vigorously leaps toward an enemy, lurking at them with its spear in three consecutive attack.',
      },
      {
        name: 'Looping Swiftstrike',
        description:
          'Kursherfang charges toward an enemy, sending them flying with its spear.',
      },
      {
        name: 'Ton Drop',
        description:
          'Kursherfang leaps up high them falls to the ground, dealing AoE damage to enemies.',
      },
    ]"
  />
</template>
