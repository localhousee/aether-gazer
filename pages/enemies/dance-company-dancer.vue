<template>
  <Enemy
    name="Dance Company <Dancer>"
    image="dance-company-dancer.jpg"
    type="Visbanes"
    risk="I"
    description="A passionate and bold dancer from a famous traveling dance company. After months of preparing for the Ardisis Ceremony, no one would have expected that their joy and anticipation would turn to tragedy and despair."
    :intel="[
      'This dancer appears no different from any other, but beneath their mask lies a monstrous fusion of Visbane and human.',
      'It enthusiastically invites the audience to interact with it on stage. but the moon-shaped hoop it carries turns into a terrifying weapon brimming with Bane Energy.',
      'Though it stands upon a stage that symbolizes glory, its dance is just an empty, soul-less shell.',
    ]"
    :skills="[
      {
        name: 'Crescent Edge',
        description:
          'The dancer swings its hoop several times to attack enemies in close range.',
      },
      {
        name: 'Full Moon Rhythm',
        description:
          'The dancer dashes toward the target, launching a spinning attack on the target location.',
      },
      {
        name: 'New Moon Slipstep',
        description:
          'The dancer charges up. then swipes forward in a flash, wielding its hoop blade to attack the enemy ahead.',
      },
    ]"
  />
</template>
