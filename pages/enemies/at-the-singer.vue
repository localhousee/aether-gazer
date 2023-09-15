<template>
  <Enemy
    name="AT <The Singer>"
    image="at-the-singer.jpg"
    type="Visbanes"
    risk="III"
    description="A humanoid Visbane that appears at the Miyahebi family at home, her specialty is paralyzing the enemy with her beautiful singing voice. She can often be seen accompanied by a whale."
    :intel="[
      'A young woman originally named Kurimoto Aoi who was fostered by the Mayahebi family and took over as their ceremonial Utahime.' +
        '<br>' +
        'She lost her exquisite voice in a five four years ago and has not been able to sing again since summoning the snake god.',
      `She accepted the Visbane transformation in order to remain at Miyahebi Syuu's side, but lost her capacity for thought as well as the majorly of her memories as a result.`,
      'While the transformation enabled her to sing beautiful songs again, she no longer has the ability to speak her heart to the people she so dearly loved.',
    ]"
    :skills="[
      {
        name: 'Leaping Wave Echo',
        description:
          'Utahime leads her whale high into the air then has it fall to create a powerful impact around its landing point. knocking back surrounding enemies.',
      },
      {
        name: 'Deepsea Tsunami',
        description:
          'The whale raises up a tsunami, delivering a massive blow to enemies ahead.',
      },
      {
        name: 'Star Tide Surge',
        description:
          'The whale spews water projectiles into the air, which descend like falling stars around enemies in an AoE attack.',
      },
      {
        name: 'Ancient Tone',
        description: `The whale's song turns into a soundwave that strikes enemies ahead.`,
      },
    ]"
  />
</template>
