<template>
  <Enemy
    name="Convallaria Knight <Female>"
    image="convallaria-knight-female.jpg"
    type="Humannoid"
    risk="I"
    description="A female member of the Knights of Convallaria, she's mainly responsible for ensuring the safety of the Astral Council and Stellaris Temple."
    :intel="[
      'As guardian of law and order in Omorfies, members receive basic combat training. Most are given melee weapons, but some members are equipped with longbows.',
      'Many members have an admiration for the arts, but were unable to become artists themselves, so they resolved to protect the art instead.',
      'The long-term peace enjoyed by Omorfies had led some members to neglect their training, resulting in a decease in their actual combat abilities.',
    ]"
    :skills="[
      {
        name: 'Arrow Burst',
        description: 'Fires a powerful arrow at a distant enemy.',
      },
      {
        name: 'Whirling Kick',
        description: 'Send the enemy ahead flying with a leaping kick.',
      },
    ]"
  />
</template>
