<!-- Not Complete -->
<template>
  <Enemy
    name="AT <The General>"
    image="at-the-general.jpg"
    type="Visbanes"
    risk="II"
    description="A hulking samurai in heavy armor with extremely high defense."
    :intel="[
      `Originally named Naoe Nagazane, he served as the captain of the guard to the Miyahebi family since the Miyahebi Syuu's father's time. He harbored deep affection for the Miyahebi family.`,
      'He too accepted being transformed into a Visbane, however he lost so much of his capacity for thought and speech due to his overly intense mood swings.' +
        '<br>' +
        'Taller and sturdier than the average humanoid Visbane, his heavy sword and use of vicious Visbanian dogs in battle make him resemble a wrathful god.',
      `This loyal general continued to guard the gates of the Miyahebi family manor to this day --- there's just nothing else that he wishes to protect.`,
    ]"
    :skills="[
      {
        name: 'Loyal Servant',
        description:
          'The General stamps heavily on the ground, summoning two Visbanian dogs to attack the enemy.',
      },
      {
        name: 'Trembling Earth',
        description:
          'The General swings his massive sword in a downward slash with such force that it sends cracks through the ground.',
      },
      {
        name: 'Merciless Expulsion',
        description:
          'The General charges up power then dashes forward an enemy ahead, swinging his weapon horizontally at an enemy.',
      },
      {
        name: 'Rabid Bite',
        description:
          `The General devours one Visbanian dog, enhancing his abilities and gaining Rabid Bite, which allows him to use an addition skills.` +
          '<br />' +
          `<strong>Rabid Bite - Disassemble</strong>: The General charges up power then swings his weapon at enemies in a broad sweeps.` +
          '<br />' +
          `<strong>Rabid Bite - Chase</strong>: The General swings his weapon in four forward sweeps, then strikes the ground.` +
          '<br />' +
          `<strong>Rabid Bite - Pitfall</strong>: The General swings his weapon into the ground, delivering two AoE attacks to enemies ahead.` +
          '<br />' +
          `<strong>Rabid Bite - Breakout</strong>: The General appears by an enemy's side in a flash, then swings his weapon at them in a sweeping attack.`,
      },
      {
        name: 'Unbreakable Defense',
        description:
          'The General summons a shield wall to withstand incoming damage from enemies ahead. Over time, the shield gradually disintegrates into a violently undulating Bane Energy which then detonates in a wide-range explosion.',
      },
    ]"
  />
</template>
