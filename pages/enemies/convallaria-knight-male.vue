<template>
  <Enemy
    name="Convallaria Knight <Male>"
    image="convallaria-knight-Male.jpg"
    type="Humanoid"
    risk="I"
    description="A male member of the Knights of Convallaria, he's mainly responsible for ensuring the safety of the Astral Council and Stellaris Temple."
    :intel="[
      'As guardians of law and order in Omorfies, members receive basic combat training. Most are given melee weapons, but some special members are equipped with longbows.',
      'Many members have an admiration for the arts, but were unable to become artists themselves, so they resolved to protect the arts instead.',
      'The long-term peace enjoyed by Omorfies had led some members to neglect their training, resulting in a decrease in their actual combat abilities.',
    ]"
    :skills="[
      {
        name: 'Shield Rush',
        description: 'Raises his shield and slams into the enemy ahead.',
      },
      {
        name: 'Gallant Sweep',
        description: 'Swings his spear to sweep enemies at close range.',
      },
      {
        name: 'Shining Strike',
        description:
          'Dashes near the target and raises his spear in an all-out attack, dealing damage.',
      },
    ]"
  />
</template>
