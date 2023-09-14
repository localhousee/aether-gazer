<template>
  <Enemy
    name="BST <Visbanic Canine>"
    image="bst-visbanic-canine.jpg"
    type="Visbanes"
    risk="I"
    description="Has a raised spine and a bearing like that of a feral dog."
    :intel="[
      'A type of bestial Visbane born of a canine corrupted by a Visbane.',
      'Likely arising from the mixing in of human data fragments during the corruption process, their front legs bear a greater resemblance to human arm in structure.',
      'After becoming Visbanes, their animal instincts and desire to hunt only grew stronger, and their sharp fangs are their strongest weapon.',
    ]"
    :skills="[
      {
        name: 'Tail Whip',
        description:
          'Charges up power and leaps to an enemy ahead, attacking them with a lash from its sharp tail',
      },
      {
        name: 'Claw Strike',
        description: 'Strikes an enemy with both sets of claws.',
      },
    ]"
  />
</template>
