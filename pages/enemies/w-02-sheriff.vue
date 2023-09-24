<template>
  <Enemy
    name="W-02 <Sheriff>"
    image="w-02-sheriff.jpg"
    type="AGI Mecha"
    risk="I"
    description="Development to blend in with the elegant environment of Stellaris Academy, this security AGI Mecha possesses the aesthetically-pleasing bearing of a statue. Even through the students and city residents are aware of the existence of this type of mecha, they still occasionally find themselves startled by its sudden movements!"
    :intel="[
      'It could be said that these humanoid statue-like AGI Mechas are a distinguishing feature of the landscape of Stellaris Academy. Over the course of their updated iterations, this is now the most widely-used and applicable type.',
      'Although their motionless quality can make them indistinguishable from statues, the mechanical luster flowing faintly over their exteriors grant them a unique beauty that many art students strive to reproduce in their work.',
      `It's said that when this type of AGI Mecha was first put to use, they frightened many timid teachers and students, for a time becoming the subject of many a strange tale circulating around Stellaris Academy.`,
    ]"
    :skills="[
      {
        name: 'H-Halt!',
        description:
          'Raises the longsword and slashes at enemies in close range.',
      },
      {
        name: 'Guard the Temple!',
        description:
          'Raises the longsword, charges up power, then stabs at the distant enemy.',
      },
    ]"
  />
</template>
