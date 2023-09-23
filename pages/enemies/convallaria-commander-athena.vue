<template>
  <Enemy
    name="Convallaria Commander <Athena>"
    image="convallaria-commander-athena.jpg"
    type="Humanoid"
    risk="III"
    description="The commander of the Knights of Convallaria and the adopted granddaughter of the Colleen Pallas whose family has been members of the Knights of Convallaria for generations. And Athena also as has always strived to be an outstanding knight, she is upright and chivalrous, upholding a code of justice and loyalty."
    :intel="[
      'The order of Omorfies could not be broken, and the honor of the Knights of Convallaria could not be sullied. In carrying these heavy burdens, Athena did not allow herself to slacken for a moment.',
      `Athena's sense of responsibility set her apart from the crowd, and she was surrounded by countless admirers and even worshippers. She found it hard to find friends who would treat her as a true equal.`,
      `Athena's adopted grandmother had always served as a role model for her. She would work to make real her ideals and expel any invaders who would threaten Omorfies. However, even the greatest of power may collapse following a loss of faith...`,
    ]"
    :skills="[
      {
        name: 'Rainbow Strum',
        description:
          'Athena uses two weapons to launch a varied two-strike attack, dealing damage to enemies in an arc-shaped area ahead.',
      },
      {
        name: 'Swaying Sound',
        description:
          'Athena launches a blast of sound waves that drift forward and explode shortly after touching an enemy, dealing damage to enemies in a circular area and putting them to sleep.',
      },
      {
        name: 'Dazzling Chord',
        description:
          'Athena dodges backward and launches a sound wave that slowly moves forward and deals damage to enemies that touch it.',
      },
      {
        name: 'Convallaria Suite',
        description:
          'Athena plucks her sword to launch several ring-shaped sound waves, dealing damage to enemies over a large area.',
      },
    ]"
  />
</template>
