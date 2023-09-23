<template>
  <Enemy
    name="AGI Mecha <Minotaur Statue>"
    image="agi-mecha-minotaur-statue.jpg"
    type="AGI Mecha"
    risk="II"
    description="A security AGI Mecha featuring a tall, muscular physique, it's roundly lauded by the Knights of Convallaria as a potent deterrent as well as for its massive, statuesque build."
    :intel="[
      `To lighten the Knight of Convallaria's security load, Stellaris Academy decided to flex its own muscles. Following a year's worth of joint research, it developed a series of first-rate AGI Mecha, including the Minotaur, which integrated power, technology, and art into one mecha.`,
      `Don't be fooled by its hulking appearance - its enhanced propulsion system makes it more agile than your average AGI Mecha.`,
      'This series of AGI Mecha is currently placed at the academy entrance as well as in front of the storeroom where some important items are kept. The formidable deterrent power it exudes is enough to make would-be bandits think twice about approaching.',
    ]"
    :skills="[
      {
        name: 'Charging Colossus',
        description:
          'Raises its giant axe high and charges toward the enemy to attack, as well as dealing damage to enemies it collides with in its path.',
      },
      {
        name: 'Banishing Axe',
        description: `Raises its giant axe up high and repeatedly pounds the ground with it. The axe's second impact sends out a shockwave that follows the enemy.`,
      },
      {
        name: 'Blistering Pursuit',
        description:
          'Raises its giant axe up high, then sends out three shockwaves that pursue and deal damage to the enemy.',
      },
    ]"
  />
</template>
