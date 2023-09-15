<template>
  <Enemy
    name="AT <The Strategist>"
    image="at-the-strategist.jpg"
    type="Visbanes"
    risk="II"
    description="A silver-haired sword master."
    :intel="[
      `A vassal to Miyahebi Syuu originally named Takenaka Hiromoto, voluntarily bounded with a Visbane out of loyalty to Syuu's cause for revenge.`,
      'Replying his astonishing force of will transform into a Visbane, his fully retained his capacity for thought and speech.' +
        '<br />' +
        ' A pair of special artificial hands allow him to wield multiple spirit blades with swordplay so precise and fierce that his opponent would have to be lucky to defend against them.',
      'He also possesses frightening wisdom and resourcefulness, able to deliver attacks from different angles and using method that, both furtive and bizarre prove staggeringly difficult to defend against.',
    ]"
    :skills="[
      {
        name: 'Spirit Blade - Profusion of Petals',
        description:
          'Summons a spirit blades and swings it to create a windstorm.',
      },
      {
        name: 'Spirit Blade - Shattered Moon',
        description:
          'Swirly steps back, then unleashes two intersecting sword beams at an enemy.',
      },
      {
        name: 'Spirit Blade - Gale',
        description:
          'Summons two spirit blades, then uses them both to attack an enemy.',
      },
    ]"
  />
</template>
