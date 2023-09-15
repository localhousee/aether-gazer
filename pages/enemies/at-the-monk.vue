<template>
  <Enemy
    name="AT <The Monk>"
    image="at-the-monk.jpg"
    type="Visbanes"
    risk="II"
    description="A Visbane painter wearing a solemn look and brandishing a paintbrush in combat."
    :intel="[
      'Once a traveling monk, his superb painting skills caught the notice of the Miyahebi family, who invited him to be their personal painter and whose often his accepted. However, a fire four years ago not only robbed him of his right arm, but his peaceful life with the Miyahebi family as well.',
      'The Painter, who once refused the transformation, now uses this body to endlessly render scene after scene of the past.',
      'No one knows the true meaning behind this deranged performance - Perhaps one can only truly understand him by battling him in his Painted World.',
    ]"
    :skills="[
      {
        name: 'Painted Verse - Skilled Hands',
        description:
          'The Painter extend his left arm and gathers Bane Energy to summon a Visbane to help him in the fight.',
      },
      {
        name: 'Painted Verse - Shackles',
        description:
          'The Painter waves his left arm and unleashes a tracking trap at an enemy. If the enemy is unable to evade the trap before it explodes, the trap will deal damage to them and shackle them.',
      },
      {
        name: 'Painted Verse - Silver Hook',
        description:
          'The Painter waves his left arm and launches two consecutive stabbing attack at an enemy before sending a ground spike to attack and sending them flying.',
      },
    ]"
  />
</template>
