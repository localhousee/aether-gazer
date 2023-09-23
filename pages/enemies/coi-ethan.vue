<template>
  <Enemy
    name="COI <Ethan>"
    image="coi-ethan.jpg"
    type="Humanoid"
    risk="III"
    description="The handsome young leader of the Children of Iron. The majority of his body has been mechanized and he always wears an easy smile on his face."
    :intel="[
      'A man who lost all his memories and woke up in some ancient ruins, on a pile of rubble and spare parts. 80% of his body tissues have been changed to machinery.',
      'The current leader of the Children of Iron, he is actively searching all over for clues regarding the current state of his body.',
      'Though proficient with various weapon types, his indolent behavior makes him quite puzzling to others.',
    ]"
    :skills="[
      {
        name: 'Suave Entrance',
        description: 'Ethan quickly moves next to an enemy, then swings his weapon in a continuous slashing attack.'
      },
      {
        name: 'Stunning Pose',
        description: 'Ethan charges up power then swing his blade at the enemy, sending them flying in a sustained attack.'
      },
      {
        name: 'Compounded Chop',
        description: `Ethan sprints over to the enemy's position, then unleashes four consecutive attacks on them.`
      },
      {
        name: 'Concentrated Strike',
        description: 'After charging up briefly, Ethan dashes toward the distant enemy and delivers a forceful blow.'
      },
    ]"
  />
</template>
