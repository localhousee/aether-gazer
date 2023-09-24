<template>
  <Enemy
    name="Dance Company <Musician>"
    image="dance-company-musician.jpg"
    type="Visbanes"
    risk="I"
    description="An elegant musician from a famous traveling dance company. After months of preparing for the Ardisis Ceremony, no one would have expected that their joy and anticipation would turn to tragedy and despair."
    :intel="[
      'This musician appears no different from any other, but beneath their mask lies a monstrous fusion of Visbane and human.',
      'Its posture remains poised and dignified while playing music, still deceiving itself that it is giving a performance.',
      'Though it stands upon a stage that symbolizes glory, its song it plays is just an empty, soul-less shell.',
    ]"
    :skills="[
      {
        name: 'Staccato ',
        description:
          'The musician draws their bow quickly, launching a long-range sound wave at the enemy.',
      },
      {
        name: 'Rubato',
        description:
          'As the tune intensifies. a surge of sonic energy provides a shield for self or an ally unit. ',
      },
      {
        name: 'Sonic Blade',
        description:
          'Sensing approaching danger, the musician launches a swift blade of sound ahead while sliding backward to gain distance from the enemy.',
      },
    ]"
  />
</template>
