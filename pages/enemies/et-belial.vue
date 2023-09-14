<template>
  <Enemy
    name="ET <Belial>"
    image="et-belial.jpg"
    type="Visbanes"
    risk="I"
    description="The products of a human thoroughly corrupted by a Visbane. Wielding a cudgel-like weapon, its athletic form contains boundless explosive power."
    :intel="[
      'A species formed by a human being was fully corrupted by a Visbane that entered the Surface Layer through a rift. Lacking a autonomous consciousness, it\'s akin to a worker bee that acts on the will of its queen.',
      'It uses a cudgel-like weapon in close-ranged attacks and is capable of simple thought, making it somewhat of a threat.',
      'These corrupted humans usually possess impressive physical strength prior to being turned into Visbanes.',
    ]"
    :skills="[
      {
        name: 'Mutation - Giant Scythe',
        description:
          'Turns its weapon into a giant scythe and slashes forward then horizontally at an enemy.',
      },
      {
        name: 'Mutation - Halberd',
        description:
          'Turns its weapon into a halberd, then slashes forward at an enemy and sends them flying.',
      },
      {
        name: 'Mutation - Hammer',
        description:
          'Turns its weapon into a hammer, swings it horizontally across a wide area, then leaps up and brings the hammer down onto enemies.',
      },
    ]"
  />
</template>
